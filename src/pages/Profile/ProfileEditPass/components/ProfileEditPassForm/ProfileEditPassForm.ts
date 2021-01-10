import { Button } from '../../../../../components/Button/Button'
import { Form } from '../../../../../components/Form/Form'
import { InputControl } from '../../../../../components/InputControl/InputControl'
import { IChangePassword } from '../../../../../core/api/profile.api'
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
