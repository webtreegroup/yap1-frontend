import { ChatAPI } from '.';

function mockFetch(status: number, data?: any) {
    const xhrMockObj = {
        open: jest.fn(),
        send: jest.fn(),
        setRequestHeader: jest.fn(),
        readyState: 4,
        status,
        response: data,
    };

    const xhrMockClass = () => xhrMockObj;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

    setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        xhrMockObj.onload();
    }, 0);
}

mockFetch(200, 'fuck you');

it('it should by done maza facka', async () => {
    const res = await ChatAPI.request().then((xhr) => xhr.response);

    expect(res).toEqual('fuck you');
})
