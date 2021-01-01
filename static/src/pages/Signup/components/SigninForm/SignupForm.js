import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { Link } from "../../../../components/Link/Link.js";
import { ROUTES } from "../../../../core/router/Router.config.js";
import { SIGNUP_FORM_CONTROLS } from "./SignupForm.config.js";
import { signupFormTmplRender } from "./SignupForm.tmpl.js";
export class SignupForm extends Form {
    constructor(props) {
        const controls = SIGNUP_FORM_CONTROLS.map(el => new InputControl(el));
        const BtnSubmit = new Button({ text: 'Зарегистрироваться', btnType: 'submit' });
        const SigninLink = new Link({
            path: ROUTES.SIGNIN.path,
            title: ROUTES.SIGNIN.title,
        });
        super(props, {
            fields: [...controls, BtnSubmit],
            SigninLink: SigninLink,
        });
    }
    onSubmit(request) {
        var _a, _b;
        (_b = (_a = this.props).onSignup) === null || _b === void 0 ? void 0 : _b.call(_a, request);
    }
    render() {
        return signupFormTmplRender();
    }
}
