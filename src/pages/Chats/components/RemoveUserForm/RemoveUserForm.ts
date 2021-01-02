import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { removeUserFormTmplRender } from "./RemoveUserForm.tmpl.js"
import { IRemoveUserForm } from "./RemoveUserForm.types.js"

export class RemoveUserForm extends Form<IRemoveUserForm> {
    constructor(props?: IRemoveUserForm){
        const Loginfield = new InputControl({ name: 'loginForDelete', label: 'Логин', required: true })
        const BtnSubmit = new Button({ text: 'Удалить', btnType: 'submit' })

        super(
            { 
                ...props,
                className: 'remove-user-fields'
            }, 
            { root: [Loginfield, BtnSubmit] },
        )
    }

    onSubmit({ loginForDelete }: { loginForDelete: string }){
        this.props.onRemoveUser?.({
            login: loginForDelete
        }, this.props.currentChatId)
    }

    render() {
        return removeUserFormTmplRender()
    }
}