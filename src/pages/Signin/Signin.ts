import { Loader } from "../../components/Loader/Loader.js"
import { Popup } from "../../components/Popup/Popup.js"
import { Block } from "../../core/block/Block.js"
import { ROUTES } from "../../core/router/Router.config.js"
import { SigninFormContainer } from "./components/SigninForm/SigninFormContainer.js"

export class Signin extends Block<HTMLDivElement> {
    constructor() {
        const SigninForm = new SigninFormContainer()
        
        const SigninPopup = new Popup({
            title: ROUTES.SIGNIN.title,
            isActive: true
        }, {
            root: [SigninForm.createBlock()]
        })

        super(
            'main', 
            { className: 'signin-page' }, 
            {
                root: [SigninPopup, new Loader()]
            }, 
        )
    }
}
