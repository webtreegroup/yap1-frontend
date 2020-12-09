import { IInputControl } from "../../components/InputControl/InputControl.model.js"

export const SIGNIN_FORM_CONTROLS: IInputControl[] = [
    { name: 'email', label: 'Почта', inputType: 'email' },
    { name: 'login', label: 'Логин' },
    { name: 'first_name', label: 'Имя' },
    { name: 'second_name', label: 'Фамилия' },
    { name: 'phone', label: 'Телефон' },
    { name: 'password', label: 'Пароль', inputType: 'password' },
    { name: 'password_confirm', label: 'Пароль (ещё раз)', inputType: 'password' },
]