import { PROFILE_CHANGE_FAIL_MESSAGE, PROFILE_CHANGE_SUCCESS_MESSAGE } from '../../../../../core/api/api.consts'
import { IChangeProfile, ProfileAPI } from '../../../../../core/api/profile.api'
import { Router } from '../../../../../core/router/Router'
import { loaderOffAction, loaderOnAction } from '../../../../../core/store/actions'
import { ProfileEditForm } from './ProfileEditForm'

export class ProfileEditFormContainer {
    constructor() {
        this.onProfileChange = this.onProfileChange.bind(this)
    }

    onProfileChange(request: IChangeProfile) {
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

    createBlock() {
        return new ProfileEditForm({
            onProfileChange: this.onProfileChange,
        })
    }
}
