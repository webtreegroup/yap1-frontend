import {
    PROFILE_CHANGE_FAIL_MESSAGE,
    PROFILE_CHANGE_SUCCESS_MESSAGE,
    IChangePassword,
    ProfileAPI,
} from 'core/api'
import { Router } from 'core/router'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { ProfileEditPassForm } from './ProfileEditPassForm'

export class ProfileEditPassFormContainer {
    constructor() {
        this.onProfilePasswordChange = this.onProfilePasswordChange.bind(this)
    }

    onProfilePasswordChange(request: IChangePassword): void {
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

    createBlock(): ProfileEditPassForm {
        return new ProfileEditPassForm({
            onProfilePasswordChange: this.onProfilePasswordChange,
        })
    }
}
