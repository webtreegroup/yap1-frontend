import { API_BASE_PATH, ChatAPI } from '.'

function mockFetch(status: number, data?: any) {
    const xhrMockObj = {
        open: jest.fn(),
        send: jest.fn(),
        setRequestHeader: jest.fn(),
        readyState: 4,
        status,
        response: data,
    }

    const xhrMockClass = () => xhrMockObj

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass)

    setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        xhrMockObj.onload()
    }, 0)

    return xhrMockObj
}

describe('API usage suite', () => {
    it('it should return array of chats', async () => {
        const chats = [
            {
                id: 1,
                title: 'name',
                avatar: 'url',
            },
        ]

        mockFetch(200, JSON.stringify(chats))

        const response = await ChatAPI.getAll().then((xhr) =>
            JSON.parse(xhr.response),
        )

        expect(response).toEqual(chats)
    })

    it('it should to be called with specific arguments', async () => {
        const xhrMock = mockFetch(200)

        await ChatAPI.getChatUsers(1)

        expect(xhrMock.open).toBeCalledWith(
            'GET',
            `${API_BASE_PATH}/chats/1/users`,
            true,
        )
    })

    it('it should to be 400 error, when pass wrong arguments', async () => {
        mockFetch(400)

        const response = await ChatAPI.getChatUsers(0)

        expect(response.status).toEqual(400)
    })
})
