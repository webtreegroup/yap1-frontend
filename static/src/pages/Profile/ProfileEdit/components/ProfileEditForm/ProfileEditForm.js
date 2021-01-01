import { Button } from "../../../../../components/Button/Button.js";
import { Form } from "../../../../../components/Form/Form.js";
import { InputControl } from "../../../../../components/InputControl/InputControl.js";
import { store } from "../../../../../core/store/store.js";
import { PROFILE_FORM_CONTROLS } from "../../../ProfileMain/components/ProfileForm/ProfileForm.config.js";
export class ProfileEditForm extends Form {
    constructor(props) {
        const fields = PROFILE_FORM_CONTROLS.map(el => new InputControl(Object.assign(Object.assign({}, el), { isTouched: true })));
        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' });
        super(Object.assign(Object.assign({}, props), { className: 'profile-fields' }), { root: [...fields, BtnSubmit] });
    }
    componentDidMount() {
        const fields = this._children.root;
        if (!fields)
            return;
        store.subscribe(() => {
            const fieldsValues = store.value.currentUser;
            fields.forEach(field => {
                const fieldName = field.props.name;
                field.setProps({ value: fieldsValues[fieldName] || undefined });
            });
        });
    }
    onSubmit(request) {
        this.props.onProfileChange(request);
    }
}
