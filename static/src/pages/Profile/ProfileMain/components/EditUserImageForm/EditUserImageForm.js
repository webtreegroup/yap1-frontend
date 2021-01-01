import { Button } from "../../../../../components/Button/Button.js";
import { Form } from "../../../../../components/Form/Form.js";
export class EditUserImageForm extends Form {
    constructor(props) {
        const BtnSubmit = new Button({ text: 'Поменять', btnType: 'submit' });
        super(Object.assign(Object.assign({}, props), { className: 'edit-user-image-fields' }), [BtnSubmit], () => `
                <input type="file" name="avatar" required>
                <div data-component="children"></div>
            `);
    }
    onSubmit(request) {
        debugger;
        this.props.onUserImageChange(request);
    }
}
