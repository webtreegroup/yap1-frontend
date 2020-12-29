
import { AuthAPI } from "../../core/api/auth.api.js"
import { Profile } from "./Profile.js"

export class ProfileContainer {
    constructor() {
        this.onLogout = this.onLogout.bind(this)
    }

    onLogout(){
        AuthAPI.logout()
    }

    createBlock() {
        return new Profile({
            onLogout: this.onLogout
        })
    }
}
