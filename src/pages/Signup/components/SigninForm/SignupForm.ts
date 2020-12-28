import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { IPopup } from "../../../../components/Popup/Popup.types.js"
import { SIGNUP_FORM_CONTROLS } from "./SignupForm.config.js"
import { signupFormTmplRender } from "./SignupForm.tmpl.js"

export class SignupForm extends Form {
    constructor(props?: IPopup){
        const controls = SIGNUP_FORM_CONTROLS.map(el => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Зарегистрироваться', btnType: 'submit' })

        super(props, [...controls, BtnSubmit])
    }

    render() {
        return signupFormTmplRender()
    }
}