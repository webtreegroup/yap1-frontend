import { IState } from "../../../../../App.types.js"
import { Button } from "../../../../../components/Button/Button.js"
import { Form } from "../../../../../components/Form/Form.js"
import { InputControl } from "../../../../../components/InputControl/InputControl.js"
import { ICurrentUserInfo } from "../../../../../core/api/auth.api.js"
import { Block } from "../../../../../core/Block.js"
import { store } from "../../../../../core/store/store.js"
import { PROFILE_FORM_CONTROLS } from "../../../ProfileMain/components/ProfileForm/ProfileForm.config.js"
import { IProfileEditForm } from "./ProfileEditForm.types.js"

export class ProfileEditForm extends Form {
    constructor(props?: IProfileEditForm) {
        const fields = PROFILE_FORM_CONTROLS.map(el => new InputControl({ ...el, isTouched: true }))
        const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' })

        super(
            { 
                ...props,
                className: 'profile-fields' 
            }, 
            [...fields, BtnSubmit], 
        )
    }

    componentDidMount(){
        store.subscribe(() => {
            const fields = this._children as Block[]
            const fieldsValues = store.value.currentUser
    
            fields.forEach(field => {
                const fieldName: keyof ICurrentUserInfo = field.props.name
                field.setProps({ value: fieldsValues[fieldName] || undefined })
            })
        })
    }

    onSubmit(request: IState){
        this.props.onProfileChange(request)
    }
}
