import { IInputControl } from 'components/InputControl/InputControl.types'
import { checkAllowedLengthAndTypeChar } from 'utils'

export const PROFILE_FORM_PASS_CONTROLS: IInputControl[] = [
    {
        inputType: 'password', name: 'oldPassword', label: 'Старый пароль', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        inputType: 'password', name: 'newPassword', label: 'Новый пароль', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
    {
        inputType: 'password', name: 'passwordConfirm', label: 'Повторите новый пароль', required: true, validationFn: [checkAllowedLengthAndTypeChar],
    },
]
