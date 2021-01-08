
import { AuthAPI, ICurrentUserInfo } from "../../../core/api/auth.api"
import { ROUTES } from "../../../core/router/Router.config"
import { Router } from "../../../core/router/Router"
import { getCurrentUserInfoAction } from "../../../core/store/actions"
import { store } from "../../../core/store/store"
import { Profile } from "./Profile"

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
