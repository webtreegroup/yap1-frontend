import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { Link } from "../../../../components/Link/Link.js";
import { ROUTES } from "../../../../core/router/Router.config.js";
import { LOGIN_FORM_CONTROLS } from "./SigninForm.config.js";
import { loginFormTmplRender } from "./SigninForm.tmpl.js";
export class SigninForm extends Form {
    constructor(props) {
        const controls = LOGIN_FORM_CONTROLS.map(el => new InputControl(el));
        const BtnSubmit = new Button({ text: 'Авторизоваться', btnType: 'submit' });
        const SignupLink = new Link({
            path: ROUTES.SIGNUP.path,
            title: ROUTES.SIGNUP.title,
        });
        super(props, {
            'fields': [...controls, BtnSubmit],
            'SignupLink': SignupLink,
        });
    }
    onSubmit(request) {
        var _a, _b;
        (_b = (_a = this.props).onSignin) === null || _b === void 0 ? void 0 : _b.call(_a, request);
    }
    render() {
        return loginFormTmplRender();
    }
}
