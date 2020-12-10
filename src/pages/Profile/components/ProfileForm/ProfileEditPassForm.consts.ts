import { IInputControl } from "../../../../components/InputControl/InputControl.model.js"
import { checkAllowedLengthAndTypeChar } from "../../../../utils/form.utils.js"

export const PROFILE_FORM_PASS_CONTROLS: IInputControl[] = [
    { value: 'password', inputType: 'password', name: 'oldPassword', label: 'Старый пароль', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { value: 'password', inputType: 'password', name: 'newPassword', label: 'Новый пароль', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { value: 'password', inputType: 'password', name: 'passwordConfirm', label: 'Повторите новый пароль', required: true, validationFn: [checkAllowedLengthAndTypeChar] }
]