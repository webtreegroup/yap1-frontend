import { AuthAPI, ICurrentUserInfo } from 'core/api'
import { setCurrentUserInfoAction } from 'core/store'
import { ProfileEdit } from './ProfileEdit'

export class ProfileEditContainer {
    onLoadProfile(): Promise<void> {
        return AuthAPI.getCurrentUserInfo().then((xhr) => {
            const response: ICurrentUserInfo = JSON.parse(xhr.response)

            setCurrentUserInfoAction(response)
        })
    }

    createBlock(): ProfileEdit {
        return new ProfileEdit({
            onLoadProfile: this.onLoadProfile,
        })
    }
}
