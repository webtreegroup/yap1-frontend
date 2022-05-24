import { AuthAPI } from 'core/api'
import { ROUTES, Router } from 'core/router'

import { checkAuth } from 'utils/auth.utils'
import { Profile } from './Profile'

export class ProfileContainer {
    onLogout(): void {
        AuthAPI.logout().then(() => {
            Router.go(ROUTES.SIGNIN.path)
            Router.reload()
        })
    }

    onLoadProfile(): Promise<void> {
        return checkAuth().catch(console.error)
    }

    createBlock(): Profile {
        const ProfileWrapped = new Profile({
            onLogout: this.onLogout,
            onLoadProfile: this.onLoadProfile,
        })

        return ProfileWrapped
    }
}
