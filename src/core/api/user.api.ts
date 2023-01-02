import { HTTP, IResponse } from './api'
import { UserContract } from './auth.api'
import { BaseAPI } from './base.api'
import { ChatContract } from './chat.api'

export interface UserChatsContract extends UserContract {
    chats: ChatContract[]
}

const userAPIInstance = new HTTP('/users')

export class UsersAPI extends BaseAPI {
    static getAll(): Promise<IResponse<string>> {
        return userAPIInstance.get<string>('/')
    }

    static getByLogin(login: string): Promise<IResponse<UserContract>> {
        return userAPIInstance.get<UserContract>(`/by-login/${login}`)
    }

    static getUserChats(id: string): Promise<IResponse<string>> {
        return userAPIInstance.get<string>(`/${id}/chats`)
    }

    static getById(id: string): Promise<IResponse<string>> {
        return userAPIInstance.get<string>(`/by-id/${id}`)
    }

    static getCurrentUser(): Promise<IResponse<string>> {
        return userAPIInstance.get<string>('/current')
    }

    static updateUserById({
        id,
        ...data
    }: UserContract): Promise<IResponse<string>> {
        return userAPIInstance.put<string>(`/${id}`, { data })
    }
}
