import { HTTP } from "./api.js";
import { BaseAPI } from "./base.api.js";
const usersAPIInstance = new HTTP('/user');
export class UsersAPI extends BaseAPI {
    static getById(id) {
        return usersAPIInstance.get(`/${id}`);
    }
    static search(data) {
        return usersAPIInstance.post('/search', { data });
    }
}
//# sourceMappingURL=users.api.js.map