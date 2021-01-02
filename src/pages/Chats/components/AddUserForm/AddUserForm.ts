import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { IUserSearch } from "../../../../core/api/users.api.js"
import { addUserFormTmplRender } from "./AddUserForm.tmpl.js"
import { IAddUserForm } from "./AddUserForm.types.js"

export class AddUserForm extends Form<IAddUserForm> {
    constructor(props?: IAddUserForm){
        const Loginfield = new InputControl({ name: 'login', label: 'Логин', required: true })
        const BtnSubmit = new Button({ text: 'Добавить', btnType: 'submit' })

        super(
            { 
                ...props,
                className: 'add-user-fields'
            }, 
            { root: [Loginfield, BtnSubmit] },
        )
    }

    onSubmit(request: IUserSearch){
        this.props.onAddUser?.(request)
    }

    render() {
        return addUserFormTmplRender()
    }
}