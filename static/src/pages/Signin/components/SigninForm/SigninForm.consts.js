import { checkAllowedLengthAndTypeChar, checkEmail, checkPhoneNumber } from "../../../../utils/form.utils.js";
export const SIGNIN_FORM_CONTROLS = [
    { name: 'email', label: 'Почта', inputType: 'email', required: true, validationFn: [checkEmail] },
    { name: 'login', label: 'Логин', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { name: 'first_name', label: 'Имя', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { name: 'second_name', label: 'Фамилия', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { name: 'phone', label: 'Телефон', required: true, validationFn: [checkPhoneNumber] },
    { name: 'password', label: 'Пароль', inputType: 'password', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { name: 'password_confirm', label: 'Пароль (ещё раз)', inputType: 'password', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
];
//# sourceMappingURL=SigninForm.consts.js.map