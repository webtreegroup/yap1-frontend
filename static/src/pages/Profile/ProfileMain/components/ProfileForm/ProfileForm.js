import { InputControl } from "../../../../../components/InputControl/InputControl.js";
import { Block } from "../../../../../core/block/Block.js";
import { PROFILE_FORM_CONTROLS } from "./ProfileForm.config.js";
class ProfileForm extends Block {
    constructor(props) {
        super('div', Object.assign(Object.assign({}, props), { className: 'profile-fields' }));
    }
    render() {
        const currentUserInfo = this.props.currentUserInfo;
        if (!currentUserInfo)
            return;
        const fields = PROFILE_FORM_CONTROLS.map(el => {
            const valueKey = el.name;
            const value = currentUserInfo[valueKey];
            return new InputControl(Object.assign(Object.assign({}, el), { value: value || '-', disabled: true, isTouched: true }));
        });
        this._children = Object.assign(Object.assign({}, this._children), { root: fields });
    }
}
export default new ProfileForm();
//# sourceMappingURL=ProfileForm.js.map