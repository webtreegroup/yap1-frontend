import { IInputControl } from "../../../../../components/InputControl/InputControl.types"
import { checkAllowedLengthAndTypeChar, checkEmail, checkPhoneNumber } from "../../../../../utils/form.utils"

export const PROFILE_FORM_CONTROLS: IInputControl[] = [
    { name: 'email', inputType: 'email', label: 'Почта', required: true, validationFn: [checkEmail] },
    { name: 'login', label: 'Логин', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { name: 'first_name', label: 'Имя', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { name: 'second_name', label: 'Фамилия', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { name: 'display_name', label: 'Имя в чате', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { name: 'phone', label: 'Телефон', required: true, validationFn: [checkPhoneNumber] },
]