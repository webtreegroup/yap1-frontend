import { AuthAPI } from "../../core/api/auth.api.js";
import { ROUTES } from "../../core/router/Router.config.js";
import { Router } from "../../core/router/Router.js";
import { Profile } from "./Profile.js";
export class ProfileContainer {
    constructor() {
        this.onLogout = this.onLogout.bind(this);
    }
    onLogout() {
        AuthAPI.logout().then(() => Router.go(ROUTES.SIGNIN.path));
    }
    createBlock() {
        return new Profile({
            onLogout: this.onLogout
        });
    }
}
