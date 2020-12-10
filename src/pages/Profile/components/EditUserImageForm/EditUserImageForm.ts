import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"

const BtnSubmit = new Button({ text: 'Поменять', btnType: 'submit' })

export const EditUserImageForm = new Form(
    { className: 'edit-user-image-fields' }, 
    [BtnSubmit],
    () => `
        <input type="file" name="avatar" required>
        <div data-component="children"></div>
    `
)
