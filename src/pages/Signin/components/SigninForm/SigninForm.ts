import { Button, Form, InputControl, IPopup } from "../../../../components/index.js"
import { SIGNIN_FORM_CONTROLS } from "../../index.js"
import { loginFormTmplRender } from "./index.js"

export class LoginForm extends Form {
    constructor(props?: IPopup){
        const controls = SIGNIN_FORM_CONTROLS.map(el => new InputControl(el))
        const btnSubmit = new Button({ text: 'Зарегистрироваться', btnType: 'submit' })

        super(props, [...controls, btnSubmit])
    }

    render() {
        return loginFormTmplRender()
    }
}