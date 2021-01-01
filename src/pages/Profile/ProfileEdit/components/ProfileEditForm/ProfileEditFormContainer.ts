
import { PROFILE_CHANGE_FAIL_MESSAGE, PROFILE_CHANGE_SUCCESS_MESSAGE } from "../../../../../core/api/api.consts.js"
import { IChangeProfile, ProfileAPI } from "../../../../../core/api/profile.api.js"
import { offLoader, onLoader } from "../../../../../core/store/actions.js"
import { ProfileEditForm } from "./ProfileEditForm.js"


export class ProfileEditFormContainer {
    constructor() {
        this.onProfileChange = this.onProfileChange.bind(this)
    }

    onProfileChange(request: IChangeProfile){
        onLoader()
        
        ProfileAPI.change(request).then((response) => {
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
        return new ProfileEditForm({
            onProfileChange: this.onProfileChange,
        })
    }
}
