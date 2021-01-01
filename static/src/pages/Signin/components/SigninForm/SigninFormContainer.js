import { SIGNIN_FAIL_MESSAGE } from "../../../../core/api/api.consts.js";
import { AuthAPI } from "../../../../core/api/auth.api.js";
import { ROUTES } from "../../../../core/router/Router.config.js";
import { Router } from "../../../../core/router/Router.js";
import { loaderOffAction, loaderOnAction } from "../../../../core/store/actions.js";
import { SigninForm } from "./SigninForm.js";
export class SigninFormContainer {
    constructor() {
        this.onSignin = this.onSignin.bind(this);
    }
    onSignin(request) {
        loaderOnAction();
        AuthAPI.signin(request).then((response) => {
            switch (response.status) {
                case 200:
                    Router.go(ROUTES.CHATS.path);
                    break;
                default:
                    alert(SIGNIN_FAIL_MESSAGE);
            }
        }).finally(() => {
            loaderOffAction();
        });
    }
    createBlock() {
        return new SigninForm({
            onSignin: this.onSignin
        });
    }
}
