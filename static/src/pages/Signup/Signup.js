import { Loader } from "../../components/Loader/Loader.js";
import { Popup } from "../../components/Popup/Popup.js";
import { Block } from "../../core/block/Block.js";
import { SignupFormContainer } from "./components/SigninForm/SignupFormContainer.js";
export class Signup extends Block {
    constructor() {
        const SignupForm = new SignupFormContainer();
        const SignupPopup = new Popup({
            title: 'Регистрация',
            isActive: true
        }, {
            root: [SignupForm.createBlock()]
        });
        super('main', { className: 'signup-page' }, {
            root: [SignupPopup, new Loader()]
        });
    }
}
//# sourceMappingURL=Signup.js.map