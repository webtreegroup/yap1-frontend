import { Button } from "../../../../../components/Button/Button.js";
import { Form } from "../../../../../components/Form/Form.js";
import { InputControl } from "../../../../../components/InputControl/InputControl.js";
import { PROFILE_FORM_CONTROLS } from "../../../ProfileMain/components/ProfileForm/ProfileForm.config.js";
export class ProfileEditForm extends Form {
    constructor(props) {
        super(Object.assign(Object.assign({}, props), { className: 'profile-fields' }));
    }
    render() {
        const currentUserInfo = this.props.currentUserInfo;
        if (!currentUserInfo)
            return;
        const fields = PROFILE_FORM_CONTROLS.map(el => {
            const valueKey = el.name;
            const value = currentUserInfo[valueKey];
            return new InputControl(Object.assign(Object.assign({}, el), { value, isTouched: value ? true : false }));
        });
        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' });
        this._children = Object.assign(Object.assign({}, this._children), { fields,
            BtnSubmit });
    }
    onSubmit(request) {
        var _a, _b;
        (_b = (_a = this.props).onProfileChange) === null || _b === void 0 ? void 0 : _b.call(_a, request);
    }
}
