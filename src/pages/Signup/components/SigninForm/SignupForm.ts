import { IState } from "../../../../App.types.js"
import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { Link } from "../../../../components/Link/Link.js"
import { ROUTES } from "../../../../core/router/Router.config.js"
import { SIGNUP_FORM_CONTROLS } from "./SignupForm.config.js"
import { signupFormTmplRender } from "./SignupForm.tmpl.js"
import { ISignupForm } from "./SignupForm.types.js"

export class SignupForm extends Form {
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
                'fields': [...controls, BtnSubmit],
                'SigninLink': SigninLink,
            }
        )
    }

    onSubmit(request: IState){
        this.props.onSignup(request)
    }

    render() {
        return signupFormTmplRender()
    }
}