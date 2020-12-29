import { AuthAPI } from "../../../../core/api/auth.api.js";
import { SigninForm } from "./SigninForm.js";
export class SigninFormContainer {
    constructor() {
        this.onSignin = this.onSignin.bind(this);
    }
    onSignin(request) {
        AuthAPI.signin(request);
    }
    createBlock() {
        return new SigninForm({
            onSignin: this.onSignin
        });
    }
}
