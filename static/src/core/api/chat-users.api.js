import { HTTP } from "./api.js";
import { BaseAPI } from "./base.api.js";
const chatUsersAPIInstance = new HTTP('/chats');
export class ChatUsersAPI extends BaseAPI {
    static addUser(data) {
        return chatUsersAPIInstance.put('/users', { data });
    }
    static deleteUser(data) {
        return chatUsersAPIInstance.delete('/users', { data });
    }
}
//# sourceMappingURL=chat-users.api.js.map