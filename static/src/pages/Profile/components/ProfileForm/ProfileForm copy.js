import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { Block } from "../../../../core/Block.js";
import { PROFILE_FORM_CONTROLS } from "./ProfileForm.consts.js";
const fields = PROFILE_FORM_CONTROLS.map(el => new InputControl(Object.assign(Object.assign({}, el), { disabled: true, isTouched: true })));
export const ProfileForm = new Block('div', { className: 'profile-fields' }, fields);
//# sourceMappingURL=ProfileForm%20copy.js.map