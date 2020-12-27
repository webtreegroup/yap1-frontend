var METHOD;
(function (METHOD) {
    METHOD["GET"] = "GET";
    METHOD["POST"] = "POST";
    METHOD["PUT"] = "PUT";
    METHOD["DELETE"] = "DELETE";
})(METHOD || (METHOD = {}));
const API_BASE_PATH = 'https://ya-praktikum.tech/api/v2';
export function queryStringify(data) {
    if (!data)
        return '';
    const queryArr = Object.entries(data).map(([key, value]) => `${key}=${value}`);
    return `?${queryArr.join('&')}`;
}
export class HTTPTransport {
    get(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHOD.GET }));
    }
    post(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHOD.POST }));
    }
    put(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHOD.PUT }));
    }
    delete(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHOD.DELETE }));
    }
    request(url, options = { method: METHOD.GET }, timeout = 5000) {
        const { method, data } = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const basePath = `${API_BASE_PATH}/${url}`;
            const path = method === METHOD.GET
                ? `${basePath}${queryStringify(data)}`
                : basePath;
            xhr.open(method, path, true);
            if (options.headers) {
                Object.entries(options.headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
            }
            xhr.onload = function () {
                resolve(xhr);
            };
            xhr.setRequestHeader('Sec-Fetch-Mode', 'cors');
            xhr.setRequestHeader('Sec-Fetch-Site', 'cross-site');
            xhr.withCredentials = true;
            xhr.timeout = timeout;
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            if (method === METHOD.GET || !data) {
                xhr.send();
            }
            else {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        });
    }
}
export const HTTP = new HTTPTransport();
