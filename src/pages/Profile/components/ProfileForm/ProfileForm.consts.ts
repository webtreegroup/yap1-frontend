import { IInputControl } from "../../../../components/InputControl/InputControl.model.js"
import { checkAllowedLengthAndTypeChar, checkEmail, checkPhoneNumber } from "../../../../utils/form.utils.js"

export const PROFILE_FORM_CONTROLS: IInputControl[] = [
    { value: 'pochta@yandex.ru', inputType: 'email', name: 'email', label: 'Почта', required: true, validationFn: [checkEmail] },
    { value: 'ivanivanov', name: 'login', label: 'Логин', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { value: 'Иван', name: 'first_name', label: 'Имя', validationFn: [checkAllowedLengthAndTypeChar] },
    { value: 'Иванов', name: 'second_name', label: 'Фамилия', validationFn: [checkAllowedLengthAndTypeChar] },
    { value: 'Иван', name: 'display_name', label: 'Имя в чате', validationFn: [checkAllowedLengthAndTypeChar] },
    { value: '89099673030', name: 'phone', label: 'Телефон', validationFn: [checkPhoneNumber] },
]