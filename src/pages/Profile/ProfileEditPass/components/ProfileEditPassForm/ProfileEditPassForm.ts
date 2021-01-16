import {
    Button,
    Form,
    InputControl,
} from 'components'
import { IChangePassword } from 'core/api'
import { PROFILE_FORM_PASS_CONTROLS } from './ProfileEditPassForm.consts'
import { IProfileEditPass } from './ProfileEditPassForm.types'

export class ProfileEditPassForm extends Form<IProfileEditPass> {
    constructor(props: IProfileEditPass) {
        const fields = PROFILE_FORM_PASS_CONTROLS.map((el) => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' })

        super(
            {
                ...props,
                className: 'profile-fields',
            },
            { root: [...fields, BtnSubmit] },
        )
    }

    onSubmit(request: IChangePassword): void {
        this.props.onProfilePasswordChange(request)
    }
}
