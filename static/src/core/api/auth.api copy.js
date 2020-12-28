import { HTTP } from "./Api.js";
import { BaseAPI } from "./base.api.js";
const authAPIInstance = new HTTP('/auth');
export class ChatAPI extends BaseAPI {
    static signup(data) {
        return authAPIInstance.post('/signup', { data });
    }
    static signin(data) {
        return authAPIInstance.post('/signin', { data });
    }
    static getCurrentUserInfo() {
        return authAPIInstance.get('/user');
    }
    static logout() {
        return authAPIInstance.post('/logout');
    }
}
