import { HTTP } from "./Api.js"
import { BaseAPI } from "./base.api.js"

const usersAPIInstance = new HTTP('/user')

export class UsersAPI extends BaseAPI {
    static getById(id: number) {
        return usersAPIInstance.get(`/${id}`)
    }

    static search(login: string) {
        return usersAPIInstance.get('/search', { data: { login }})
    }
}
