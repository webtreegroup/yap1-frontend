import { HTTP } from "./api"
import { BaseAPI } from "./base.api"

const chatUsersAPIInstance = new HTTP('/chats')

export interface IAddAndRemoveUser {
    users: number[]
    chatId: number
}

export class ChatUsersAPI extends BaseAPI {
    static addUser(data: IAddAndRemoveUser) {
        return chatUsersAPIInstance.put('/users', { data })
    }

    static deleteUser(data: IAddAndRemoveUser) {
        return chatUsersAPIInstance.delete('/users', { data })
    }
}
