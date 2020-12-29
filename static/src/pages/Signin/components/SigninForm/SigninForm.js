import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { LOGIN_FORM_CONTROLS } from "./SigninForm.config.js";
import { loginFormTmplRender } from "./SigninForm.tmpl.js";
export class SigninForm extends Form {
    constructor(props) {
        const controls = LOGIN_FORM_CONTROLS.map(el => new InputControl(el));
        const BtnSubmit = new Button({ text: 'Авторизоваться', btnType: 'submit' });
        super(props, [...controls, BtnSubmit]);
    }
    onSubmit(request) {
        this.props.onSignin(request);
    }
    render() {
        return loginFormTmplRender();
    }
}
