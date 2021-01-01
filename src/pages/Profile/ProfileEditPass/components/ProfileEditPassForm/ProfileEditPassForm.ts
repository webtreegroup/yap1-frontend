import { Button } from "../../../../../components/Button/Button.js"
import { Form } from "../../../../../components/Form/Form.js"
import { InputControl } from "../../../../../components/InputControl/InputControl.js"
import { IChangePassword } from "../../../../../core/api/profile.api.js"
import { PROFILE_FORM_PASS_CONTROLS } from "./ProfileEditPassForm.consts.js"
import { IProfileEditPass } from "./ProfileEditPassForm.types.js"

export class ProfileEditPassForm extends Form<IProfileEditPass> {
    constructor(props: IProfileEditPass){
        const fields = PROFILE_FORM_PASS_CONTROLS.map(el => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' })

        super(
            { 
                ...props,
                className: 'profile-fields',
            },
            { root: [...fields, BtnSubmit] },
        )
    }

    onSubmit(request: IChangePassword){
        this.props.onProfilePasswordChange(request)
    }
}