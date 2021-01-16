import { IInputControl } from 'components/InputControl/InputControl.types'
import { checkAllowedLengthAndTypeChar } from 'utils'

export const LOGIN_FORM_CONTROLS: IInputControl[] = [
    {
        name: 'login', label: 'Логин', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        name: 'password', label: 'Пароль', inputType: 'password', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
]
