import { Popup } from "../../components/Popup/Popup.js"
// import { HTTP } from "../../core/Api.js"
import { Block } from "../../core/Block.js"
import { LoginForm } from "./components/LoginForm/SigninForm.js"

export class Signin extends Block<HTMLDivElement> {
    constructor() {
        const SigninPopup = new Popup({
            title: 'Вход',
            isActive: true
        }, [new LoginForm()])

        super(
            'main', 
            { className: 'signin-page' }, 
            [SigninPopup], 
        )
    }
}
