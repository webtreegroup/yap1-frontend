import { Button, Form, InputControl } from 'components'
import { addUserFormTmplRender } from './AddUserForm.tmpl'
import { AddUserFormProps } from './AddUserForm.types'

export class AddUserForm extends Form<AddUserFormProps> {
    constructor(props?: AddUserFormProps) {
        const Loginfield = new InputControl({
            name: 'loginForAdd',
            label: 'Логин',
            required: true,
        })
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
        this.props.onAddUser?.(loginForAdd, this.props.currentChatId)
    }

    componentDidMount(): void {
        this.props.onLoadComponent?.()
    }

    render(): string {
        return addUserFormTmplRender()
    }
}
