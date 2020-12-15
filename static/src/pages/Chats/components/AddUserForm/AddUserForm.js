import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
const Loginfield = new InputControl({ name: 'loginToAdd', label: 'Логин', required: true });
const BtnSubmit = new Button({ text: 'Добавить', btnType: 'submit' });
export const AddUserForm = new Form({ className: 'add-user-fields' }, [Loginfield, BtnSubmit]);
