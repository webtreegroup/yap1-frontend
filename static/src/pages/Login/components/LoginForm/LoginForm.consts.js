import { checkLoginLength } from "../../../../utils/form.utils.js";
export const LOGIN_FORM_CONTROLS = [
    { name: 'login', label: 'Логин', required: true, validationFn: [checkLoginLength] },
    { name: 'password', label: 'Пароль', inputType: 'password', required: true },
];
//# sourceMappingURL=LoginForm.consts.js.map