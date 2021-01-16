import { PROFILE_CHANGE_FAIL_MESSAGE, PROFILE_CHANGE_SUCCESS_MESSAGE, ProfileAPI } from 'core/api'
import { Router } from 'core/router'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { EditUserImageForm } from './EditUserImageForm'

export class EditUserImageFormContainer {
    constructor() {
        this.onUserImageChange = this.onUserImageChange.bind(this)
    }

    onUserImageChange(request: FormData): void {
        loaderOnAction()

        ProfileAPI.changeAvatar(request).then((response) => {
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

    createBlock(): EditUserImageForm {
        return new EditUserImageForm({
            onUserImageChange: this.onUserImageChange,
        })
    }
}
