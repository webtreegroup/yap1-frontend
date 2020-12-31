import { Button } from "../../../../../components/Button/Button.js";
import { Form } from "../../../../../components/Form/Form.js";
import { InputControl } from "../../../../../components/InputControl/InputControl.js";
import { store } from "../../../../../core/store/store.js";
import { PROFILE_FORM_CONTROLS } from "../../../ProfileMain/components/ProfileForm/ProfileForm.config.js";
class ProfileFormEdit extends Form {
    constructor() {
        const fields = PROFILE_FORM_CONTROLS.map(el => new InputControl(Object.assign(Object.assign({}, el), { isTouched: true })));
        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' });
        super({ className: 'profile-fields' }, [...fields, BtnSubmit]);
    }
    componentDidMount() {
        store.subscribe(() => {
            const fields = this._children;
            const fieldsValues = store.value.currentUser;
            fields.forEach(field => {
                const fieldName = field.props.name;
                field.setProps({ value: fieldsValues[fieldName] || undefined });
            });
        });
    }
}
export default new ProfileFormEdit();
