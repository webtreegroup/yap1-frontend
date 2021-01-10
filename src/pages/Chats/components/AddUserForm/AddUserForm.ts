import { Button } from '../../../../components/Button/Button'
import { Form } from '../../../../components/Form/Form'
import { InputControl } from '../../../../components/InputControl/InputControl'
import { addUserFormTmplRender } from './AddUserForm.tmpl'
import { IAddUserForm } from './AddUserForm.types'

export class AddUserForm extends Form<IAddUserForm> {
    constructor(props?: IAddUserForm) {
        const Loginfield = new InputControl({ name: 'loginForAdd', label: 'Логин', required: true })
        const BtnSubmit = new Button({ text: 'Добавить', btnType: 'submit' })

        super(
            {
                ...props,
                className: 'add-user-fields',
            },
            { root: [Loginfield, BtnSubmit] },
        )
    }

    onSubmit({ loginForAdd }: { loginForAdd: string }): void {
        this.props.onAddUser?.({
            login: loginForAdd,
        }, this.props.currentChatId)
    }

    render(): string {
        return addUserFormTmplRender()
    }
}
