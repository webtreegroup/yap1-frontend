import { checkLoginLength } from "../../utils/form.utils.js";
export const PROFILE_FORM_CONTROLS = [
    { value: 'pochta@yandex.ru', inputType: 'email', name: 'email', label: 'Почта', required: true },
    { value: 'ivanivanov', name: 'login', label: 'Логин', required: true, validationFn: [checkLoginLength] },
    { value: 'Иван', name: 'first_name', label: 'Имя' },
    { value: 'Иванов', name: 'second_name', label: 'Фамилия' },
    { value: 'Иван', name: 'display_name', label: 'Имя в чате' },
    { value: '+7 (909) 967 30 30', name: 'phone', label: 'Телефон' },
];
export const PROFILE_FORM_PASS_CONTROLS = [
    { value: 'password', inputType: 'password', name: 'oldPassword', label: 'Старый пароль', required: true },
    { value: 'password', inputType: 'password', name: 'newPassword', label: 'Новый пароль', required: true },
    { value: 'password', inputType: 'password', name: 'passwordConfirm', label: 'Повторите новый пароль', required: true }
];
//# sourceMappingURL=Profile.consts.js.map