import { SIGNIN_FAIL_MESSAGE } from "../../../../core/api/api.consts.js"
import { AuthAPI, ISignin } from "../../../../core/api/auth.api.js"
import { ROUTES } from "../../../../core/router/Router.config.js"
import { Router } from "../../../../core/router/Router.js"
import { SigninForm } from "./SigninForm.js"

export class SigninFormContainer {
    constructor() {
        this.onSignin = this.onSignin.bind(this)
    }

    onSignin(request: ISignin){
        AuthAPI.signin(request).then((response) => {
            switch (response.status) {
                case 200:
                    Router.go(ROUTES.CHATS.path)
                    break
                default:
                    alert(SIGNIN_FAIL_MESSAGE)
            }
        })
    }

    createBlock() {
        return new SigninForm({
            onSignin: this.onSignin
        })
    }
}
