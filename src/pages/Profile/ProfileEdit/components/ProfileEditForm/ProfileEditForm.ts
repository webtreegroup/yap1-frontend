import { Button } from "../../../../../components/Button/Button.js"
import { Form } from "../../../../../components/Form/Form.js"
import { InputControl } from "../../../../../components/InputControl/InputControl.js"
import { ICurrentUserInfo } from "../../../../../core/api/auth.api.js"
import { IChangeProfile } from "../../../../../core/api/profile.api.js"
import { PROFILE_FORM_CONTROLS } from "../../../ProfileMain/components/ProfileForm/ProfileForm.config.js"
import { IProfileEditForm } from "./ProfileEditForm.types.js"

export class ProfileEditForm extends Form<IProfileEditForm> {
    constructor(props: IProfileEditForm) {
        super(
            { 
                ...props,
                className: 'profile-fields' 
            }
        )
    }

    render(){
        const currentUserInfo = this.props.currentUserInfo

        if (!currentUserInfo) return

        const fields = PROFILE_FORM_CONTROLS.map(el => {
            const valueKey = el.name as keyof ICurrentUserInfo
            const value = currentUserInfo[valueKey]

            return new InputControl({ 
                ...el,
                value,
                isTouched: value ? true : false
            })
        })

        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' })

        this._children = {
            ...this._children,
            fields,
            BtnSubmit
        }
    }

    onSubmit(request: IChangeProfile){
        this.props.onProfileChange?.(request)
    }
}
