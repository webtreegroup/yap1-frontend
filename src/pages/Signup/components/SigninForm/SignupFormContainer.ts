import { AuthAPI, ISignup } from "../../../../core/api/auth.api.js"
import { SignupForm } from "./SignupForm.js"

export class SignupFormContainer {
    constructor() {
        this.onSignup = this.onSignup.bind(this)
    }

    onSignup(request: ISignup){
        AuthAPI.signup(request)
    }

    createBlock() {
        return new SignupForm({
            onSignup: this.onSignup
        })
    }
}
