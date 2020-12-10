import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { PROFILE_FORM_CONTROLS } from "./ProfileForm.consts.js";
const fields = PROFILE_FORM_CONTROLS.map(el => new InputControl(Object.assign(Object.assign({}, el), { isTouched: true })));
const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' });
export const ProfileFormEdit = new Form({ className: 'profile-fields' }, [...fields, BtnSubmit]);
//# sourceMappingURL=ProfileFormEdit.js.map