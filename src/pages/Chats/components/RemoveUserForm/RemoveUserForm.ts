import {
    Button,
    Form,
    InputControl,
} from 'components'
import { removeUserFormTmplRender } from './RemoveUserForm.tmpl'
import { IRemoveUserForm } from './RemoveUserForm.types'

export class RemoveUserForm extends Form<IRemoveUserForm> {
    constructor(props?: IRemoveUserForm) {
        const Loginfield = new InputControl({ name: 'loginForDelete', label: 'Логин', required: true })
        const BtnSubmit = new Button({ text: 'Удалить', btnType: 'submit' })

        super(
            {
                ...props,
                className: 'remove-user-fields',
            },
            { root: [Loginfield, BtnSubmit] },
        )
    }

    onSubmit({ loginForDelete }: { loginForDelete: string }): void {
        this.props.onRemoveUser?.({
            login: loginForDelete,
        }, this.props.currentChatId)
    }

    render(): string {
        return removeUserFormTmplRender()
    }
}
