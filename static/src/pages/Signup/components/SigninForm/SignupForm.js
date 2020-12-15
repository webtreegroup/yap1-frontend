import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { SIGNIN_FORM_CONTROLS } from "./SignupForm.config.js";
import { signinFormTmplRender } from "./SignupForm.tmpl.js";
export class SigninForm extends Form {
    constructor(props) {
        const controls = SIGNIN_FORM_CONTROLS.map(el => new InputControl(el));
        const BtnSubmit = new Button({ text: 'Зарегистрироваться', btnType: 'submit' });
        super(props, [...controls, BtnSubmit]);
    }
    render() {
        return signinFormTmplRender();
    }
}
