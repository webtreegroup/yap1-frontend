import { SIGNIN_FAIL_MESSAGE, AuthAPI, ISignin } from 'core/api'
import { ROUTES, Router } from 'core/router'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { SigninForm } from './SigninForm'

export class SigninFormContainer {
    constructor() {
        this.onSignin = this.onSignin.bind(this)
    }

    onSignin(request: ISignin): void {
        loaderOnAction()

        AuthAPI.signin(request)
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

    createBlock(): SigninForm {
        return new SigninForm({
            onSignin: this.onSignin,
        })
    }
}
