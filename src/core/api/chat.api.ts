import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

export interface IChat {
    id: number
    title: string
    avatar: string
}

export interface IAddChat {
    title: string
}

const chatAPIInstance = new HTTP('/chats')

export class ChatAPI extends BaseAPI {
    static create<T = IAddChat>(data: T): Promise<IResponse<T>> {
        return chatAPIInstance.post<T>('/', { data })
    }

    static request(): Promise<IResponse<string>> {
        return chatAPIInstance.get<string>('/')
    }

    static getChatUsers(chatId: number): Promise<IResponse<string>> {
        return chatAPIInstance.get<string>(`/${chatId}/users`)
    }

    static delete(chatId: number): Promise<IResponse<string>> {
        return chatAPIInstance.get('/', { data: { chatId } })
    }
}
