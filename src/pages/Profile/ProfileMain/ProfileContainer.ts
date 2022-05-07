import { AuthAPI, ICurrentUserInfo, UsersAPI } from 'core/api'
import { ROUTES, Router } from 'core/router'
import { setCurrentUserInfoAction, store } from 'core/store'
import { Profile } from './Profile'

export class ProfileContainer {
    onLogout(): void {
        AuthAPI.logout().then(() => {
            Router.go(ROUTES.SIGNIN.path)
            Router.reload()
        })
    }

    onLoadProfile(): Promise<void> {
        return UsersAPI.getCurrentUser().then((xhr) => {
            const response: ICurrentUserInfo = JSON.parse(xhr.response)

            setCurrentUserInfoAction(response)
        })
    }

    createBlock(): Profile {
        const ProfileWrapped = new Profile({
            onLogout: this.onLogout,
            onLoadProfile: this.onLoadProfile,
            avatar: store.value.currentUser.avatar,
        })

        store.subscribe((state) => {
            ProfileWrapped.setProps({
                avatar: state.currentUser.avatar,
            })
        }, [])

        return ProfileWrapped
    }
}
