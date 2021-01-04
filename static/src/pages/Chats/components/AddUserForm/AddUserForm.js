import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { addUserFormTmplRender } from "./AddUserForm.tmpl.js";
export class AddUserForm extends Form {
    constructor(props) {
        const Loginfield = new InputControl({ name: 'loginForAdd', label: 'Логин', required: true });
        const BtnSubmit = new Button({ text: 'Добавить', btnType: 'submit' });
        super(Object.assign(Object.assign({}, props), { className: 'add-user-fields' }), { root: [Loginfield, BtnSubmit] });
    }
    onSubmit({ loginForAdd }) {
        var _a, _b;
        (_b = (_a = this.props).onAddUser) === null || _b === void 0 ? void 0 : _b.call(_a, {
            login: loginForAdd
        }, this.props.currentChatId);
    }
    render() {
        return addUserFormTmplRender();
    }
}
//# sourceMappingURL=AddUserForm.js.map