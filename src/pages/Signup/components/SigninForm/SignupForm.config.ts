import { IInputControl } from '../../../../components/InputControl/InputControl.types'
import { checkAllowedLengthAndTypeChar, checkEmail, checkPhoneNumber } from '../../../../utils/form.utils'

export const SIGNUP_FORM_CONTROLS: IInputControl[] = [
    {
        name: 'email', label: 'Почта', inputType: 'email', required: true, validationFn: [checkEmail],
    },
    {
        name: 'login', label: 'Логин', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        name: 'first_name', label: 'Имя', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        name: 'second_name', label: 'Фамилия', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        name: 'phone', label: 'Телефон', required: true, validationFn: [checkPhoneNumber],
    },
    {
        name: 'password', label: 'Пароль', inputType: 'password', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        name: 'password_confirm', label: 'Пароль (ещё раз)', inputType: 'password', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
]
