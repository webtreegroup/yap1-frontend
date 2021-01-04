
import { AuthAPI, ICurrentUserInfo } from "../../../core/api/auth.api.js"
import { ROUTES } from "../../../core/router/Router.config.js"
import { Router } from "../../../core/router/Router.js"
import { getCurrentUserInfoAction } from "../../../core/store/actions.js"
import { store } from "../../../core/store/store.js"
import { Profile } from "./Profile.js"

export class ProfileContainer {
    onLogout(){
        AuthAPI.logout().then(() => {
            Router.go(ROUTES.SIGNIN.path)
            Router.reload()
        })
    }

    onLoadProfile(){
        return AuthAPI.getCurrentUserInfo().then((xhr) => {
            const response: ICurrentUserInfo = JSON.parse(xhr.response)

            getCurrentUserInfoAction(response)
        })
    }

    createBlock() {
        const ProfileWrapped = new Profile({
            onLogout: this.onLogout,
            onLoadProfile: this.onLoadProfile,
            avatar: store.value.currentUser.avatar
        })

        store.subscribe((state) => {
            ProfileWrapped.setProps({
                avatar: state.currentUser.avatar
            })
        })

        return ProfileWrapped
    }
}
