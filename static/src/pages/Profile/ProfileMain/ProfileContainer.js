import { AuthAPI } from "../../../core/api/auth.api.js";
import { ROUTES } from "../../../core/router/Router.config.js";
import { Router } from "../../../core/router/Router.js";
import { getCurrentUserInfoAction } from "../../../core/store/actions.js";
import { Profile } from "./Profile.js";
export class ProfileContainer {
    onLogout() {
        AuthAPI.logout().then(() => Router.go(ROUTES.SIGNIN.path));
    }
    onLoadProfile() {
        return AuthAPI.getCurrentUserInfo().then((xhr) => {
            const response = JSON.parse(xhr.response);
            getCurrentUserInfoAction(response);
        });
    }
    createBlock() {
        return new Profile({
            onLogout: this.onLogout,
            onLoadProfile: this.onLoadProfile,
        });
    }
}
//# sourceMappingURL=ProfileContainer.js.map