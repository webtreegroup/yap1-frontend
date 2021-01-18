function performRequest(callback: any) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://fffff.com/')
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4 || xhr.status !== 200) return
        callback(xhr.response)
    }
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send(null)
}

describe('request', () => {
    const xhrMock: Partial<XMLHttpRequest> = {
        open: jest.fn(),
        send: jest.fn(),
        setRequestHeader: jest.fn(),
        readyState: 4,
        status: 200,
        response: 'Hello World!',
    }

    jest.spyOn(window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest)

    const callback = jest.fn()

    performRequest(callback)

    it('her', () => {
        (xhrMock.onreadystatechange as EventListener)(new Event(''))
        expect(callback.mock.calls).toEqual([['Hello World!']])
    })
})
