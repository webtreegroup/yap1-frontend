import { HTTP } from "./Api.js";
import { BaseAPI } from "./base.api.js";
const chatUsersAPIInstance = new HTTP('/chats');
export class ChatUsersAPI extends BaseAPI {
    static addUser(users, chatId) {
        return chatUsersAPIInstance.put('/users', { data: {
                users,
                chatId
            } });
    }
    static deleteUser(users, chatId) {
        return chatUsersAPIInstance.delete('/users', { data: {
                users,
                chatId
            } });
    }
}
