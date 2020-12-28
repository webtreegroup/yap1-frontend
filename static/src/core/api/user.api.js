import { HTTP } from "./Api.js";
import { BaseAPI } from "./base.api.js";
const userAPIInstance = new HTTP('/user');
export class UserAPI extends BaseAPI {
    static changeProfile(data) {
        return userAPIInstance.put('/profile', { data });
    }
    static changeProfileAvatar(data) {
        return userAPIInstance.put('/profile/avatar', { data });
    }
}
