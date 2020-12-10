import { checkAllowedLengthAndTypeChar } from "../../../../utils/form.utils.js";
export const LOGIN_FORM_CONTROLS = [
    { name: 'login', label: 'Логин', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { name: 'password', label: 'Пароль', inputType: 'password', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
];
//# sourceMappingURL=LoginForm.config.js.map