import { IState } from "../../../../App.types.js"
import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { SIGNUP_FORM_CONTROLS } from "./SignupForm.config.js"
import { signupFormTmplRender } from "./SignupForm.tmpl.js"
import { ISignupForm } from "./SignupForm.types.js"

export class SignupForm extends Form {
    constructor(props?: ISignupForm){
        const controls = SIGNUP_FORM_CONTROLS.map(el => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Зарегистрироваться', btnType: 'submit' })

        super(props, [...controls, BtnSubmit])
    }

    onSubmit(request: IState){
        this.props.onSignup(request)
    }

    render() {
        return signupFormTmplRender()
    }
}