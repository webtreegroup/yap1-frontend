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
}
