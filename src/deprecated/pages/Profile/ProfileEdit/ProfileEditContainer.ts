import { checkAuth } from 'utils/auth.utils'
import { ProfileEdit } from './ProfileEdit'

export class ProfileEditContainer {
    onLoadProfile(): Promise<void> {
        return checkAuth().catch(console.error)
    }

    createBlock(): ProfileEdit {
        return new ProfileEdit({
            onLoadComponent: this.onLoadProfile,
        })
    }
}
