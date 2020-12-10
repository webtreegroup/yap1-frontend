import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
const Loginfield = new InputControl({ name: 'loginToRemove', label: 'Логин', required: true });
const BtnSubmit = new Button({ text: 'Удалить', btnType: 'submit' });
export const RemoveUserForm = new Form({ className: 'remove-user-fields' }, [Loginfield, BtnSubmit]);
//# sourceMappingURL=RemoveUserForm.js.map