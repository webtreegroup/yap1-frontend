import { Button } from "../../../../../components/Button/Button.js"
import { Form } from "../../../../../components/Form/Form.js"
import { IEditUserImageForm } from "./EditUserImageForm.types.js"

export class EditUserImageForm extends Form {
    constructor(props?: IEditUserImageForm){
        const BtnSubmit = new Button({ text: 'Поменять', btnType: 'submit' })

        super(
            { 
                ...props,
                className: 'edit-user-image-fields' 
            }, 
            [BtnSubmit],
            () => `
                <input type="file" name="avatar" required>
                <div data-component="children"></div>
            `
        )
    }

    onSubmit(request: IEditUserImageForm){
        debugger
        this.props.onUserImageChange(request)
    }
}