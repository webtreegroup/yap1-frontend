import { HTTP } from "./Api.js";
import { BaseAPI } from "./base.api.js";
const profileAPIInstance = new HTTP('/user');
export class ProfileAPI extends BaseAPI {
    static change(data) {
        return profileAPIInstance.put('/profile', { data });
    }
    static changeAvatar(data) {
        return profileAPIInstance.put('/profile/avatar', { data });
    }
    static changePassword(data) {
        return profileAPIInstance.put('/password', { data });
    }
}
//# sourceMappingURL=profile.api.js.map