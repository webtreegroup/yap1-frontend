import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { removeUserFormTmplRender } from "./RemoveUserForm.tmpl.js";
export class RemoveUserForm extends Form {
    constructor(props) {
        const Loginfield = new InputControl({ name: 'loginForDelete', label: 'Логин', required: true });
        const BtnSubmit = new Button({ text: 'Удалить', btnType: 'submit' });
        super(Object.assign(Object.assign({}, props), { className: 'remove-user-fields' }), { root: [Loginfield, BtnSubmit] });
    }
    onSubmit({ loginForDelete }) {
        var _a, _b;
        (_b = (_a = this.props).onRemoveUser) === null || _b === void 0 ? void 0 : _b.call(_a, {
            login: loginForDelete
        }, this.props.currentChatId);
    }
    render() {
        return removeUserFormTmplRender();
    }
}
