import { StoreType } from 'App.types'
import {
    FAIL_MESSAGE_500_DEFAULT,
    FAIL_MESSAGE_DEFAULT,
    METHOD,
} from './api.consts'

type OptionsType = {
    method: METHOD
    data?: any
    headers?: StoreType<string>
    timeout?: number
}

type OptionsWithoutMethodType = Omit<OptionsType, 'method'>

export interface IResponse<T> extends Omit<XMLHttpRequest, 'response'> {
    response: T
}

export const API_HOST = 'localhost:5000'
export const API_BASE_PATH = `http://${API_HOST}`

export function queryStringify<T extends object>(data: T): string {
    if (!data) return ''

    const queryArr = Object.entries(data).map(
        ([key, value]) => `${key}=${value}`,
    )

    return `?${queryArr.join('&')}`
}

export class HTTP {
    _path: string = API_BASE_PATH

    constructor(path = '') {
        this._path += path
    }

    get<T>(
        url: string,
        options: OptionsWithoutMethodType = {},
    ): Promise<IResponse<T>> {
        return this.request<T>(url, { ...options, method: METHOD.GET })
    }

    post<T>(
        url: string,
        options: OptionsWithoutMethodType = {},
    ): Promise<IResponse<T>> {
        return this.request<T>(url, { ...options, method: METHOD.POST })
    }

    put<T>(
        url: string,
        options: OptionsWithoutMethodType = {},
    ): Promise<IResponse<T>> {
        return this.request<T>(url, { ...options, method: METHOD.PUT })
    }

    delete<T>(
        url: string,
        options: OptionsWithoutMethodType = {},
    ): Promise<IResponse<T>> {
        return this.request<T>(url, { ...options, method: METHOD.DELETE })
    }

    request<T>(
        url: string,
        options: OptionsType = { method: METHOD.GET },
        timeout = 5000,
    ): Promise<IResponse<T>> {
        const { method, data } = options

        const defaultReject = (xhr: XMLHttpRequest) => {
            if (xhr.status === 500) {
                alert(FAIL_MESSAGE_500_DEFAULT)
            } else {
                alert(FAIL_MESSAGE_DEFAULT)
            }
        }

        return new Promise<IResponse<T>>((resolve, reject = defaultReject) => {
            const xhr = new XMLHttpRequest()
            const basePath = `${this._path}${url}`
            const path =
                method === METHOD.GET
                    ? `${basePath}${queryStringify(data)}`
                    : basePath

            xhr.open(method, path, true)

            if (options.headers) {
                Object.entries(options.headers).forEach(([key, value]) =>
                    xhr.setRequestHeader(key, value),
                )
            }

            xhr.onload = function () {
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
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.send(JSON.stringify(data))
            }
        })
    }
}
