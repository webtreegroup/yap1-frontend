import { Loader } from "../../components/Loader/Loader"
import { Popup } from "../../components/Popup/Popup"
import { Block } from "../../core/block/Block"
import { SignupFormContainer } from "./components/SigninForm/SignupFormContainer"

export class Signup extends Block<HTMLDivElement> {
    constructor() {
        const SignupForm = new SignupFormContainer()

        const SignupPopup = new Popup({
            title: 'Регистрация',
            isActive: true
        }, {
            root: [SignupForm.createBlock()]
        })

        super(
            'main', 
            { className: 'signup-page' }, 
            {
                root: [SignupPopup, new Loader()]
            }, 
        )
    }
}