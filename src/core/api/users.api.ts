import { HTTP } from "./api"
import { BaseAPI } from "./base.api"

const usersAPIInstance = new HTTP('/user')

export interface IUserSearch {
    login: string
}

export class UsersAPI extends BaseAPI {
    static getById(id: number) {
        return usersAPIInstance.get(`/${id}`)
    }

    static search(data: IUserSearch) {
        return usersAPIInstance.post<string>('/search', { data })
    }
}
