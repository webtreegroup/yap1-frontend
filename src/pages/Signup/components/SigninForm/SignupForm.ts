import { Button } from "../../../../components/Button/Button"
import { Form } from "../../../../components/Form/Form"
import { InputControl } from "../../../../components/InputControl/InputControl"
import { Link } from "../../../../components/Link/Link"
import { ISignup } from "../../../../core/api/auth.api"
import { ROUTES } from "../../../../core/router/Router.config"
import { SIGNUP_FORM_CONTROLS } from "./SignupForm.config"
import { signupFormTmplRender } from "./SignupForm.tmpl"
import { ISignupForm } from "./SignupForm.types"

export class SignupForm extends Form<ISignupForm> {
    constructor(props?: ISignupForm){
        const controls = SIGNUP_FORM_CONTROLS.map(el => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Зарегистрироваться', btnType: 'submit' })
        const SigninLink = new Link({
            path: ROUTES.SIGNIN.path,
            title: ROUTES.SIGNIN.title,
        })

        super(
            props, 
            { 
                fields: [...controls, BtnSubmit],
                SigninLink: SigninLink,
            }
        )
    }

    onSubmit(request: ISignup){
        this.props.onSignup?.(request)
    }

    render() {
        return signupFormTmplRender()
    }
}