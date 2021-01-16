import {
    PROFILE_CHANGE_FAIL_MESSAGE,
    PROFILE_CHANGE_SUCCESS_MESSAGE,
    IChangeProfile,
    ProfileAPI,
} from 'core/api'
import { Router } from 'core/router'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { ProfileEditForm } from './ProfileEditForm'

export class ProfileEditFormContainer {
    constructor() {
        this.onProfileChange = this.onProfileChange.bind(this)
    }

    onProfileChange(request: IChangeProfile): void {
        loaderOnAction()

        ProfileAPI.change(request).then((response) => {
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

    createBlock(): ProfileEditForm {
        return new ProfileEditForm({
            onProfileChange: this.onProfileChange,
        })
    }
}
