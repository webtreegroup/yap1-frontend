import { HTTP, IResponse } from './api'
import { UserContract } from './auth.api'
import { BaseAPI } from './base.api'

export interface ChatContract {
    id: string
    name: string
    ownerId: string
}

export interface ChatUsersContract {
    id: string
    name: string
    ownerId: string
    users: UserContract[]
}

export interface ChatFormContract {
    name: string
}

const chatAPIInstance = new HTTP('/chats')

export class ChatAPI extends BaseAPI {
    static create<T = ChatFormContract>(data: T): Promise<IResponse<string>> {
        return chatAPIInstance.post('/', { data })
    }

    static delete<T = ChatFormContract>(data: T): Promise<IResponse<string>> {
        return chatAPIInstance.delete('/by-name', { data })
    }

    static getAll(): Promise<IResponse<string>> {
        return chatAPIInstance.get<string>('/')
    }

    static getChatUsers(chatId: string): Promise<IResponse<ChatUsersContract>> {
        return chatAPIInstance.get<ChatUsersContract>(`/${chatId}/users`)
    }

    static getById(chatId: string): Promise<IResponse<ChatContract>> {
        return chatAPIInstance.get<ChatContract>(`/by-id/${chatId}`)
    }
}
