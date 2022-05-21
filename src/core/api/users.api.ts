import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

const usersAPIInstance = new HTTP('/users')

export class UsersAPI extends BaseAPI {
    static getAll(): Promise<IResponse<string>> {
        return usersAPIInstance.get<string>('/')
    }

    static getByLogin(login: string): Promise<IResponse<string>> {
        return usersAPIInstance.get<string>(`/search/${login}`)
    }

    static getCurrentUser(): Promise<IResponse<string>> {
        return usersAPIInstance.get<string>('/current')
    }
}
