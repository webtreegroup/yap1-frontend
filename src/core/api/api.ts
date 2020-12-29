enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

type HeadersType = {
    [key: string]: string
}

type OptionsType = {
    method: METHOD
    data?: any
    headers?: HeadersType
    timeout?: number
}

type OptionsWithoutMethodType = Omit<OptionsType, 'method'>

const API_BASE_PATH = 'https://ya-praktikum.tech/api/v2'

export function queryStringify<T extends object>(data: T): string {
    if (!data) return ''

    const queryArr = Object.entries(data).map(([key, value]) => 
        `${key}=${value}`)

	return `?${queryArr.join('&')}`
}

export class HTTP {
    _path: string = API_BASE_PATH

    constructor(path = ''){
        this._path += path
    }

    get(url: string, options: OptionsWithoutMethodType = {}): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.GET})
    }

    post(url: string, options: OptionsWithoutMethodType = {}): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.POST})
    }

    put(url: string, options: OptionsWithoutMethodType = {}): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.PUT})
    }

    delete(url: string, options: OptionsWithoutMethodType = {}): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.DELETE})
    }

    request(
        url: string, 
        options: OptionsType = { method: METHOD.GET }, 
        timeout = 5000
    ): Promise<XMLHttpRequest> {
        const {method, data} = options

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            const basePath = `${this._path}${url}`
            const path = method === METHOD.GET 
                ? `${basePath}${queryStringify(data)}`
                : basePath

            xhr.open(method, path, true)

            if (options.headers) {
                Object.entries(options.headers).forEach(([key, value]) => 
                    xhr.setRequestHeader(key, value)
                )
            }
            
            xhr.onload = function() {
                resolve(xhr)
            }

            xhr.withCredentials = true
            xhr.timeout = timeout
            xhr.onabort = reject
            xhr.onerror = reject
            xhr.ontimeout = reject

            if (method === METHOD.GET || !data) {
                xhr.send()
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.send(JSON.stringify(data))
            }
        })
    }
}
