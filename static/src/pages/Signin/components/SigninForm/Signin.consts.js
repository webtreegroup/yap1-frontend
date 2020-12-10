import { checkLoginLength } from "../../utils/form.utils.js";
export const SIGNIN_FORM_CONTROLS = [
    { name: 'email', label: 'Почта', inputType: 'email', required: true },
    { name: 'login', label: 'Логин', required: true, validationFn: [checkLoginLength] },
    { name: 'first_name', label: 'Имя' },
    { name: 'second_name', label: 'Фамилия' },
    { name: 'phone', label: 'Телефон' },
    { name: 'password', label: 'Пароль', inputType: 'password', required: true },
    { name: 'password_confirm', label: 'Пароль (ещё раз)', inputType: 'password', required: true },
];
//# sourceMappingURL=Signin.consts.js.map