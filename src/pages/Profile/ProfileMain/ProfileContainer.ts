import { AuthAPI } from 'core/api'
import { ROUTES, Router } from 'core/router'
import { store } from 'core/store'
import { checkAuth, getCurrentUser } from 'utils/auth.utils'
import { Profile } from './Profile'

export class ProfileContainer {
    onLogout(): void {
        AuthAPI.logout().then(() => {
            Router.go(ROUTES.SIGNIN.path)
            Router.reload()
        })
    }

    onLoadProfile(): Promise<void> {
        return checkAuth().then(getCurrentUser)
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
