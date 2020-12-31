import { Button } from "../../../../../components/Button/Button.js";
import { Form } from "../../../../../components/Form/Form.js";
import { InputControl } from "../../../../../components/InputControl/InputControl.js";
import { PROFILE_FORM_PASS_CONTROLS } from "./ProfileEditPassForm.consts.js";
export class ProfileEditPassForm extends Form {
    constructor(props) {
        const fields = PROFILE_FORM_PASS_CONTROLS.map(el => new InputControl(el));
        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' });
        super(Object.assign(Object.assign({}, props), { className: 'profile-fields' }), [...fields, BtnSubmit]);
    }
    onSubmit(request) {
        this.props.onProfilePasswordChange(request);
    }
}
