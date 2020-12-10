import { IInputControl } from "../../../../components/InputControl/InputControl.model.js"
import { checkLoginLength } from "../../../../utils/form.utils.js"

export const LOGIN_FORM_CONTROLS: IInputControl[] = [
    { name: 'login', label: 'Логин', required: true, validationFn: [checkLoginLength] },
    { name: 'password', label: 'Пароль', inputType: 'password', required: true },
]