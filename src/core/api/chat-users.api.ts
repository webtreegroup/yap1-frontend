import { HTTP } from "./Api.js"
import { BaseAPI } from "./base.api.js"

const chatUsersAPIInstance = new HTTP('/chats')

export class ChatUsersAPI extends BaseAPI {
    static addUser(users: number[], chatId: number) {
        return chatUsersAPIInstance.put('/users', { data: {
            users,
            chatId
        }})
    }

    static deleteUser(users: number[], chatId: number) {
        return chatUsersAPIInstance.delete('/users', { data: {
            users,
            chatId
        }})
    }
}
