import { checkAuth, getCurrentUser } from 'utils/auth.utils'
import { ProfileEdit } from './ProfileEdit'

export class ProfileEditContainer {
    onLoadProfile(): Promise<void> {
        return checkAuth().then(getCurrentUser)
    }

    createBlock(): ProfileEdit {
        return new ProfileEdit({
            onLoadComponent: this.onLoadProfile,
        })
    }
}
