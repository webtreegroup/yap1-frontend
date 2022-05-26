import { Button, InputControl, Form } from 'components'
import { UserContract, IChangeProfile } from 'core/api'
import { store } from 'core/store'
import { PROFILE_FORM_CONTROLS } from '../../../ProfileMain/components/ProfileForm/ProfileForm.config'
import { ProfileEditFormProps } from './ProfileEditForm.types'

export class ProfileEditForm extends Form<ProfileEditFormProps> {
    constructor(props: ProfileEditFormProps) {
        const fields = PROFILE_FORM_CONTROLS.map((el) => {
            const currentUserInfo = store.value.currentUser
            const valueKey = el.name as keyof UserContract
            const value = currentUserInfo?.[valueKey]

            return new InputControl({
                ...el,
                value,
                isTouched: !!value,
            })
        })

        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' })

        super(
            {
                ...props,
                className: 'profile-fields',
            },
            {
                fields,
                BtnSubmit,
            },
        )
    }

    onSubmit(request: IChangeProfile): void {
        this.props.onProfileChange?.(request)
    }

    public componentDidUpdate(): void {
        console.log(store.value.currentUser)
    }
}
