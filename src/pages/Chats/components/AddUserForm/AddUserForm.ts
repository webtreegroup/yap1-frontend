import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { addUserFormTmplRender } from "./AddUserForm.tmpl.js"
import { IAddUserForm } from "./AddUserForm.types.js"

export class AddUserForm extends Form<IAddUserForm> {
    constructor(props?: IAddUserForm){
        const Loginfield = new InputControl({ name: 'loginForAdd', label: 'Логин', required: true })
        const BtnSubmit = new Button({ text: 'Добавить', btnType: 'submit' })

        super(
            { 
                ...props,
                className: 'add-user-fields'
            }, 
            { root: [Loginfield, BtnSubmit] },
        )
    }

    onSubmit({ loginForAdd }: { loginForAdd: string }){
        this.props.onAddUser?.({
            login: loginForAdd
        }, this.props.currentChatId)
    }

    render() {
        return addUserFormTmplRender()
    }
}