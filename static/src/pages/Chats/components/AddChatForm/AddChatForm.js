import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { ADD_CHAT_FORM_CONTROLS } from "./AddChatForm.config.js";
import { addChatFormTmplRender } from "./AddChatForm.tmpl.js";
export class AddChatForm extends Form {
    constructor(props) {
        const controls = ADD_CHAT_FORM_CONTROLS.map(el => new InputControl(el));
        const BtnSubmit = new Button({ text: 'Добавить', btnType: 'submit' });
        super(props, {
            root: [...controls, BtnSubmit],
        });
    }
    onSubmit(request) {
        var _a, _b;
        (_b = (_a = this.props).onAddChat) === null || _b === void 0 ? void 0 : _b.call(_a, request);
    }
    render() {
        return addChatFormTmplRender();
    }
}
