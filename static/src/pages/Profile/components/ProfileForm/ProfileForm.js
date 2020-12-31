import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { Block } from "../../../../core/Block.js";
import { store } from "../../../../core/store/store.js";
import { PROFILE_FORM_CONTROLS } from "./ProfileForm.config.js";
class ProfileForm extends Block {
    constructor() {
        const fields = PROFILE_FORM_CONTROLS.map(el => new InputControl(Object.assign(Object.assign({}, el), { disabled: true, isTouched: true })));
        super('div', { className: 'profile-fields' }, fields);
    }
    componentDidMount() {
        store.subscribe(() => {
            const fields = this._children;
            const fieldsValues = store.value.currentUser;
            fields.forEach(field => {
                const fieldName = field.props.name;
                field.setProps({ value: fieldsValues[fieldName] });
            });
        });
    }
}
export default new ProfileForm();
