
import { AuthAPI, ICurrentUserInfo } from "../../../core/api/auth.api"
import { getCurrentUserInfoAction } from "../../../core/store/actions"
import { ProfileEdit } from "./ProfileEdit"

export class ProfileEditContainer {
    onLoadProfile(){
        return AuthAPI.getCurrentUserInfo().then((xhr) => {
            const response: ICurrentUserInfo = JSON.parse(xhr.response)

            getCurrentUserInfoAction(response)
        })
    }

    createBlock() {
        return new ProfileEdit({
            onLoadProfile: this.onLoadProfile,
        })
    }
}
