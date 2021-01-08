import { METHOD } from './api.consts'

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

interface IResponse<T> extends Omit<XMLHttpRequest, 'response'> {
    response: T
}

export const API_HOST = 'https://ya-praktikum.tech'
export const API_BASE_PATH = `${API_HOST}/api/v2`

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

    get<T = any>(url: string, options: OptionsWithoutMethodType = {}) {
        return this.request<T>(url, {...options, method: METHOD.GET})
    }

    post<T = any>(url: string, options: OptionsWithoutMethodType = {}) {
        return this.request<T>(url, {...options, method: METHOD.POST})
    }

    put<T = any>(url: string, options: OptionsWithoutMethodType = {}) {
        return this.request<T>(url, {...options, method: METHOD.PUT})
    }

    delete<T = any>(url: string, options: OptionsWithoutMethodType = {}) {
        return this.request<T>(url, {...options, method: METHOD.DELETE})
    }

    request<T>(
        url: string, 
        options: OptionsType = { method: METHOD.GET }, 
        timeout = 5000
    ): Promise<IResponse<T>> {
        const {method, data} = options

        return new Promise<IResponse<T>>((resolve, reject) => {
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
            } else if (data instanceof FormData) {
                xhr.send(data)
            } else  {
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.send(JSON.stringify(data))
            }
        })
    }
}
