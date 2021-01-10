import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

const usersAPIInstance = new HTTP('/user')

export interface IUserSearch {
    login: string
}

export class UsersAPI extends BaseAPI {
    static getById(id: number): Promise<IResponse<string>> {
        return usersAPIInstance.get<string>(`/${id}`)
    }

    static search(data: IUserSearch): Promise<IResponse<string>> {
        return usersAPIInstance.post<string>('/search', { data })
    }
}
