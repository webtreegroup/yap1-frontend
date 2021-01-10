import { Button } from '../../../../../components/Button/Button'
import { Form } from '../../../../../components/Form/Form'
import { IEditUserImageForm } from './EditUserImageForm.types'

export class EditUserImageForm extends Form<IEditUserImageForm> {
    constructor(props: IEditUserImageForm) {
        const BtnSubmit = new Button({ text: 'Поменять', btnType: 'submit' })

        super(
            {
                ...props,
                className: 'edit-user-image-fields',
            },
            { root: [BtnSubmit] },
            () => `
                <input type="file" name="avatar" required>
                <div data-component="root"></div>
            `,
        )
    }

    onSubmit(_: IEditUserImageForm, formData: FormData): void {
        this.props.onUserImageChange(formData)
    }
}
