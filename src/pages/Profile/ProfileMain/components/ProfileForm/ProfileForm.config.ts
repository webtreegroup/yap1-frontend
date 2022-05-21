import { InputControlProps } from 'components/InputControl/InputControl.types'
import {
    checkAllowedLengthAndTypeChar,
    checkEmail,
    checkPhoneNumber,
} from 'utils'

export const PROFILE_FORM_CONTROLS: InputControlProps[] = [
    {
        name: 'email',
        inputType: 'email',
        label: 'Почта',
        required: true,
        validationFn: [checkEmail],
    },
    {
        name: 'login',
        label: 'Логин',
        required: true,
        validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        name: 'firstName',
        label: 'Имя',
        required: true,
        validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        name: 'secondName',
        label: 'Фамилия',
        required: true,
        validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        name: 'phone',
        label: 'Телефон',
        required: true,
        validationFn: [checkPhoneNumber],
    },
]
