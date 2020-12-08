import { Button, Form, InputControl } from "../../../components/index.js";
import { LOGIN_FORM_CONTROLS } from "../Login.consts.js";
import { loginFormTmplRender } from "./LoginForm.tmpl.js";
export class LoginForm extends Form {
    constructor(props) {
        const controls = LOGIN_FORM_CONTROLS.map(el => new InputControl(el));
        const btnSubmit = new Button({ text: 'Авторизоваться', btnType: 'submit' });
        super(props, [...controls, btnSubmit]);
    }
    render() {
        return loginFormTmplRender();
    }
}
