import { IInputControl } from "../../../../components/InputControl/InputControl.model.js"

export const PROFILE_FORM_PASS_CONTROLS: IInputControl[] = [
    { value: 'password', inputType: 'password', name: 'oldPassword', label: 'Старый пароль', required: true },
    { value: 'password', inputType: 'password', name: 'newPassword', label: 'Новый пароль', required: true },
    { value: 'password', inputType: 'password', name: 'passwordConfirm', label: 'Повторите новый пароль', required: true }
]