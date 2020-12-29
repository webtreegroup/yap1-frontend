import { HTTP } from "./Api.js";
import { BaseAPI } from "./base.api.js";
const authAPIInstance = new HTTP('/auth');
export class AuthAPI extends BaseAPI {
    static signup(data) {
        return authAPIInstance.post('/signup', { data });
    }
    // login: 'SanchoPansoYo',
    // password: 'SanchoPansoYo123'
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
