import { API_BASE_PATH, ChatAPI } from '.'

describe('request', () => {
    const xhrMock: Partial<XMLHttpRequest> = {
        open: jest.fn(),
        send: jest.fn(),
        setRequestHeader: jest.fn(),
        readyState: 4,
        status: 200,
        response: 'Hello World!',
    }

    it('her', () => {
        jest.spyOn(window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest)
        const callback = jest.fn()

        ChatAPI.request().then((xhr) => {
            callback(xhr.response)

            // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // // @ts-ignore
            // xhrMock.onload()
            expect(callback.mock.calls).toEqual([['Hello World!']])
        })
    })
})

// function performRequest(callback: any) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', 'https://example.com/')
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState !== 4 || xhr.status !== 200) return
//         callback(xhr.response)
//     }
//     xhr.responseType = 'json'
//     xhr.setRequestHeader('Accept', 'application/json')
//     xhr.send(null)
// }

// describe('request', () => {
//     const xhrMock: Partial<XMLHttpRequest> = {
//         open: jest.fn(),
//         send: jest.fn(),
//         setRequestHeader: jest.fn(),
//         readyState: 4,
//         status: 200,
//         response: 'Hello World!',
//     }

//     jest.spyOn(window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest)

//     const callback = jest.fn()

//     performRequest(callback)

//     it('her', () => {
//         expect(xhrMock.open).toBeCalledWith('GET', 'https://example.com/');
//         (xhrMock.onreadystatechange as EventListener)(new Event(''))
//         expect(callback.mock.calls).toEqual([['Hello World!']])
//     })
// })
