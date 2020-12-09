import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { loginFormTmplRender } from "../../../Login/components/LoginForm/LoginForm.tmpl.js";
import { SIGNIN_FORM_CONTROLS } from "../../Signin.consts.js";
export class LoginForm extends Form {
    constructor(props) {
        const controls = SIGNIN_FORM_CONTROLS.map(el => new InputControl(el));
        const btnSubmit = new Button({ text: 'Зарегистрироваться', btnType: 'submit' });
        super(props, [...controls, btnSubmit]);
    }
    render() {
        return loginFormTmplRender();
    }
}
