import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { LOGIN_FORM_CONTROLS } from "./LoginForm.config.js";
import { loginFormTmplRender } from "./LoginForm.tmpl.js";
export class LoginForm extends Form {
    constructor(props) {
        const controls = LOGIN_FORM_CONTROLS.map(el => new InputControl(el));
        const BtnSubmit = new Button({ text: 'Авторизоваться', btnType: 'submit' });
        super(props, [...controls, BtnSubmit]);
    }
    render() {
        return loginFormTmplRender();
    }
}
//# sourceMappingURL=SigninForm.js.map