import { Popup } from "../../components/Popup/Popup.js"
import { Block } from "../../core/Block.js"
import { SigninFormContainer } from "./components/SigninForm/SigninFormContainer.js"

export class Signin extends Block<HTMLDivElement> {
    constructor() {
        const SigninForm = new SigninFormContainer()
        const SigninPopup = new Popup({
            title: 'Вход',
            isActive: true
        }, [SigninForm.createBlock()])

        super(
            'main', 
            { className: 'signin-page' }, 
            [SigninPopup], 
        )
    }
}
