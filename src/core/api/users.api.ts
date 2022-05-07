import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

const usersAPIInstance = new HTTP('/users')

export interface IUserSearch {
    login: string
}

export class UsersAPI extends BaseAPI {
    static search(data: IUserSearch): Promise<IResponse<string>> {
        return usersAPIInstance.post<string>('/search', { data })
    }

    static getCurrentUser(): Promise<IResponse<string>> {
        return usersAPIInstance.get<string>('/current')
    }
}
