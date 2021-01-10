import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

const chatUsersAPIInstance = new HTTP('/chats')

export interface IAddAndRemoveUser {
    users: number[]
    chatId: number
}

export class ChatUsersAPI extends BaseAPI {
    static addUser<T = IAddAndRemoveUser>(data: T): Promise<IResponse<T>> {
        return chatUsersAPIInstance.put<T>('/users', { data })
    }

    static deleteUser<T = IAddAndRemoveUser>(data: T): Promise<IResponse<T>> {
        return chatUsersAPIInstance.delete<T>('/users', { data })
    }
}
