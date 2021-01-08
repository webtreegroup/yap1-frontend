import { SIGNIN_FAIL_MESSAGE } from "../../../../core/api/api.consts"
import { AuthAPI, ISignin } from "../../../../core/api/auth.api"
import { ROUTES } from "../../../../core/router/Router.config"
import { Router } from "../../../../core/router/Router"
import { loaderOffAction, loaderOnAction } from "../../../../core/store/actions"
import { SigninForm } from "./SigninForm"

export class SigninFormContainer {
    constructor() {
        this.onSignin = this.onSignin.bind(this)
    }

    onSignin(request: ISignin){
        loaderOnAction()
        
        AuthAPI.signin(request).then((response) => {
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

    createBlock() {
        return new SigninForm({
            onSignin: this.onSignin
        })
    }
}
