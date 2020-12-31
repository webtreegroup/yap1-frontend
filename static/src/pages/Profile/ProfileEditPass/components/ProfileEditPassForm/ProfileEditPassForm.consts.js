import { checkAllowedLengthAndTypeChar } from "../../../../../utils/form.utils.js";
export const PROFILE_FORM_PASS_CONTROLS = [
    { inputType: 'password', name: 'oldPassword', label: 'Старый пароль', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { inputType: 'password', name: 'newPassword', label: 'Новый пароль', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { inputType: 'password', name: 'passwordConfirm', label: 'Повторите новый пароль', required: true, validationFn: [checkAllowedLengthAndTypeChar] }
];
