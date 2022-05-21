import { Button, InputControl, Form } from 'components'
import { UserContract, IChangeProfile } from 'core/api'
import { PROFILE_FORM_CONTROLS } from '../../../ProfileMain/components/ProfileForm/ProfileForm.config'
import { IProfileEditForm } from './ProfileEditForm.types'

export class ProfileEditForm extends Form<IProfileEditForm> {
    constructor(props: IProfileEditForm) {
        super({
            ...props,
            className: 'profile-fields',
        })
    }

    render(): void {
        const { currentUserInfo } = this.props

        if (!currentUserInfo) return

        const fields = PROFILE_FORM_CONTROLS.map((el) => {
            const valueKey = el.name as keyof UserContract
            const value = currentUserInfo[valueKey]

            return new InputControl({
                ...el,
                value: value || undefined,
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

    onSubmit(request: IChangeProfile): void {
        this.props.onProfileChange?.(request)
    }
}
