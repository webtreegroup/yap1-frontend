import { SIGNIN_FAIL_MESSAGE } from '../../../../core/api/api.consts'
import { AuthAPI, ISignup } from '../../../../core/api/auth.api'
import { ROUTES } from '../../../../core/router/Router.config'
import { Router } from '../../../../core/router/Router'
import { loaderOffAction, loaderOnAction } from '../../../../core/store/actions'
import { SignupForm } from './SignupForm'

export class SignupFormContainer {
    constructor() {
        this.onSignup = this.onSignup.bind(this)
    }

    onSignup(request: ISignup): void {
        loaderOnAction()

        AuthAPI.signup(request).then((response) => {
            switch (response.status) {
            case 200:
                Router.go(ROUTES.CHATS.path)
                break
            default:
                alert(SIGNIN_FAIL_MESSAGE)
            }
        }).finally(() => {
            loaderOffAction()
        })
    }

    createBlock(): SignupForm {
        return new SignupForm({
            onSignup: this.onSignup,
        })
    }
}
