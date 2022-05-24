import { InputControl } from 'components'
import { UserContract } from 'core/api'
import { Component } from 'core/block'
import { ProfileEditFormProps } from '../../../ProfileEdit/components/ProfileEditForm/ProfileEditForm.types'
import { PROFILE_FORM_CONTROLS } from './ProfileForm.config'

class ProfileForm extends Component<HTMLDivElement, ProfileEditFormProps> {
    constructor(props?: ProfileEditFormProps) {
        super('div', {
            ...props,
            className: 'profile-fields',
        })
    }

    setComponentTemplate() {
        const { currentUserInfo } = this.props

        if (!currentUserInfo) return

        const fields = PROFILE_FORM_CONTROLS.map((el) => {
            const valueKey = el.name as keyof UserContract
            const value = currentUserInfo[valueKey]

            return new InputControl({
                ...el,
                value: value || '-',
                disabled: true,
                isTouched: true,
            })
        })

        this.children = {
            ...this.children,
            root: fields,
        }
    }
}

export default new ProfileForm()
