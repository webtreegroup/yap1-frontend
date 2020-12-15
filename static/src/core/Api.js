var METHOD;
(function (METHOD) {
    METHOD["GET"] = "GET";
    METHOD["POST"] = "POST";
    METHOD["PUT"] = "PUT";
    METHOD["PATCH"] = "PATCH";
    METHOD["DELETE"] = "DELETE";
})(METHOD || (METHOD = {}));
const API_BASE_PATH = 'http://ya-praktikum.tech/api/v2';
export class HTTPTransport {
    get(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHOD.GET }));
    }
    request(url, options = { method: METHOD.GET }) {
        const { method, data } = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, `${API_BASE_PATH}/${url}`);
            xhr.onload = function () {
                resolve(xhr);
            };
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            if (method === METHOD.GET || !data) {
                xhr.send();
            }
            else {
                xhr.send(data);
            }
        });
    }
}
export const HTTP = new HTTPTransport();
