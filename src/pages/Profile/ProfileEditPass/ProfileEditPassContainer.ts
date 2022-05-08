import { checkAuth, getCurrentUser } from 'utils/auth.utils'
import { ProfileEditPass } from './ProfileEditPass'

export class ProfileEditPassContainer {
    onLoadProfile(): Promise<void> {
        return checkAuth().then(getCurrentUser)
    }

    createBlock(): ProfileEditPass {
        return new ProfileEditPass({
            onLoadComponent: this.onLoadProfile,
        })
    }
}
