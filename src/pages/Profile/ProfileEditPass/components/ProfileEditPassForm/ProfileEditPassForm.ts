import { IState } from "../../../../../App.types.js"
import { Button } from "../../../../../components/Button/Button.js"
import { Form } from "../../../../../components/Form/Form.js"
import { InputControl } from "../../../../../components/InputControl/InputControl.js"
import { PROFILE_FORM_PASS_CONTROLS } from "./ProfileEditPassForm.consts.js"
import { IProfileEditPass } from "./ProfileEditPassForm.types.js"

export class ProfileEditPassForm extends Form {
    constructor(props?: IProfileEditPass){
        const fields = PROFILE_FORM_PASS_CONTROLS.map(el => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' })

        super(
            { 
                ...props,
                className: 'profile-fields',
            },
            [...fields, BtnSubmit], 
        )
    }

    onSubmit(request: IState){
        this.props.onProfilePasswordChange(request)
    }
}