import { SIGNIN_FAIL_MESSAGE, AuthAPI, ISignup } from 'core/api'
import { ROUTES, Router } from 'core/router'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { SignupForm } from './SignupForm'

export class SignupFormContainer {
    constructor() {
        this.onSignup = this.onSignup.bind(this)
    }

    onSignup(request: ISignup): void {
        loaderOnAction()

        AuthAPI.signup(request)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        Router.go(ROUTES.CHATS.path)
                        break
                    default:
                        alert(SIGNIN_FAIL_MESSAGE)
                }
            })
            .finally(() => {
                loaderOffAction()
            })
    }

    createBlock(): SignupForm {
        return new SignupForm({
            onSignup: this.onSignup,
        })
    }
}
