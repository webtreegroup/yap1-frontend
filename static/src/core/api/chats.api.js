import { HTTP } from "./Api.js";
import { BaseAPI } from "./base.api.js";
const chatAPIInstance = new HTTP('/chats');
export class ChatAPI extends BaseAPI {
    static create(title) {
        return chatAPIInstance.post('/', { data: { title } });
    }
    static request() {
        return chatAPIInstance.get('/');
    }
    static delete(chatId) {
        return chatAPIInstance.get('/', { data: { chatId } });
    }
    static addUser(users, chatId) {
        return chatAPIInstance.put('/users', { data: {
                users,
                chatId
            } });
    }
    static deleteUser(users, chatId) {
        return chatAPIInstance.delete('/users', { data: {
                users,
                chatId
            } });
    }
}
