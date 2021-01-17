import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

const chatMessageAPIInstance = new HTTP('/chats')

export interface IChatConnectResponse {
    token: string
}

export interface IChatMessage {
    content: string
    type: string
}

export class MessageChatAPI extends BaseAPI {
    static connect(chatId: number): Promise<IResponse<IChatConnectResponse>> {
        return chatMessageAPIInstance.post(`/${chatId}`)
    }
}
