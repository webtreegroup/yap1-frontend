import { Popup } from "../../components/Popup/Popup.js";
import { Block } from "../../core/Block.js";
import { SignupForm } from "./components/SigninForm/SignupForm.js";
export class Signup extends Block {
    constructor() {
        const SignupPopup = new Popup({
            title: 'Регистрация',
            isActive: true
        }, [new SignupForm()]);
        super('main', { className: 'signup-page' }, [SignupPopup]);
    }
}
