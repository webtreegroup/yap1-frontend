
import { PROFILE_CHANGE_FAIL_MESSAGE, PROFILE_CHANGE_SUCCESS_MESSAGE } from "../../../../../core/api/api.consts"
import { IChangePassword, ProfileAPI } from "../../../../../core/api/profile.api"
import { Router } from "../../../../../core/router/Router"
import { loaderOffAction, loaderOnAction } from "../../../../../core/store/actions"
import { ProfileEditPassForm } from "./ProfileEditPassForm"


export class ProfileEditPassFormContainer {
    constructor() {
        this.onProfilePasswordChange = this.onProfilePasswordChange.bind(this)
    }

    onProfilePasswordChange(request: IChangePassword){
        loaderOnAction()
        
        ProfileAPI.changePassword(request).then((response) => {
            switch (response.status) {
                case 200:
                    alert(PROFILE_CHANGE_SUCCESS_MESSAGE)
                    Router.reload()
                    break
                default:
                    alert(PROFILE_CHANGE_FAIL_MESSAGE)
            }
        }).finally(() => {
            loaderOffAction()
        })
    }

    createBlock() {
        return new ProfileEditPassForm({
            onProfilePasswordChange: this.onProfilePasswordChange,
        })
    }
}
