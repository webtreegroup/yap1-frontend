import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

const chatMessageAPIInstance = new HTTP('/chats')

export interface IChatConnectResponse {
    token: string
}

export interface IChatMessage {
    message: string
}

export class MessageChatAPI extends BaseAPI {
    static connect(userId: string, chatId: string): Promise<IResponse<string>> {
        return chatMessageAPIInstance.get(`/connect/${userId}/${chatId}`)
    }
}
