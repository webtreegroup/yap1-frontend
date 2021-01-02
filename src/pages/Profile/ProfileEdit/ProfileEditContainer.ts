
import { AuthAPI, ICurrentUserInfo } from "../../../core/api/auth.api.js"
import { getCurrentUserInfoAction } from "../../../core/store/actions.js"
import { ProfileEdit } from "./ProfileEdit.js"

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
