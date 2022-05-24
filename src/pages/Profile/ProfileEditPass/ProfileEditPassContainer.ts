import { checkAuth } from 'utils/auth.utils'
import { ProfileEditPass } from './ProfileEditPass'

export class ProfileEditPassContainer {
    onLoadProfile(): Promise<void> {
        return checkAuth().catch(console.error)
    }

    createBlock(): ProfileEditPass {
        return new ProfileEditPass({
            onLoadComponent: this.onLoadProfile,
        })
    }
}
