import { Button } from '../../../../../components/Button/Button'
import { Form } from '../../../../../components/Form/Form'
import { InputControl } from '../../../../../components/InputControl/InputControl'
import { ICurrentUserInfo } from '../../../../../core/api/auth.api'
import { IChangeProfile } from '../../../../../core/api/profile.api'
import { PROFILE_FORM_CONTROLS } from '../../../ProfileMain/components/ProfileForm/ProfileForm.config'
import { IProfileEditForm } from './ProfileEditForm.types'

export class ProfileEditForm extends Form<IProfileEditForm> {
    constructor(props: IProfileEditForm) {
        super(
            {
                ...props,
                className: 'profile-fields',
            },
        )
    }

    render() {
        const { currentUserInfo } = this.props

        if (!currentUserInfo) return

        const fields = PROFILE_FORM_CONTROLS.map((el) => {
            const valueKey = el.name as keyof ICurrentUserInfo
            const value = currentUserInfo[valueKey]

            return new InputControl({
                ...el,
                value,
                isTouched: !!value,
            })
        })

        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' })

        this._children = {
            ...this._children,
            fields,
            BtnSubmit,
        }
    }

    onSubmit(request: IChangeProfile) {
        this.props.onProfileChange?.(request)
    }
}
