import { SIGNIN_FAIL_MESSAGE } from "../../../../core/api/api.consts.js"
import { AuthAPI, ISignup } from "../../../../core/api/auth.api.js"
import { ROUTES } from "../../../../core/router/Router.config.js"
import { Router } from "../../../../core/router/Router.js"
import { offLoader, onLoader } from "../../../../core/store/actions.js"
import { SignupForm } from "./SignupForm.js"

export class SignupFormContainer {
    constructor() {
        this.onSignup = this.onSignup.bind(this)
    }

    onSignup(request: ISignup){
        onLoader()
        
        AuthAPI.signup(request).then((response) => {
            switch (response.status) {
                case 200:
                    Router.go(ROUTES.CHATS.path)
                    break
                default:
                    alert(SIGNIN_FAIL_MESSAGE)
            }
        }).finally(() => {
            offLoader()
        })
    }

    createBlock() {
        return new SignupForm({
            onSignup: this.onSignup
        })
    }
}
