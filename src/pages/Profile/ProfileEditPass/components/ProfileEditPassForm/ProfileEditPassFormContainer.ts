
import { PROFILE_CHANGE_FAIL_MESSAGE, PROFILE_CHANGE_SUCCESS_MESSAGE } from "../../../../../core/api/api.consts.js"
import { IChangePassword, ProfileAPI } from "../../../../../core/api/profile.api.js"
import { offLoader, onLoader } from "../../../../../core/store/actions.js"
import { ProfileEditPassForm } from "./ProfileEditPassForm.js"


export class ProfileEditPassFormContainer {
    constructor() {
        this.onProfilePasswordChange = this.onProfilePasswordChange.bind(this)
    }

    onProfilePasswordChange(request: IChangePassword){
        onLoader()
        
        ProfileAPI.changePassword(request).then((response) => {
            switch (response.status) {
                case 200:
                    alert(PROFILE_CHANGE_SUCCESS_MESSAGE)
                    break
                default:
                    alert(PROFILE_CHANGE_FAIL_MESSAGE)
            }
        }).finally(() => {
            offLoader()
        })
    }

    createBlock() {
        return new ProfileEditPassForm({
            onProfilePasswordChange: this.onProfilePasswordChange,
        })
    }
}
