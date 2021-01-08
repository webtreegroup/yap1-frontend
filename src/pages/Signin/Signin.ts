import { Loader } from "../../components/Loader/Loader"
import { Popup } from "../../components/Popup/Popup"
import { Block } from "../../core/block/Block"
import { ROUTES } from "../../core/router/Router.config"
import { SigninFormContainer } from "./components/SigninForm/SigninFormContainer"

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
