import { checkAllowedLengthAndTypeChar, checkEmail, checkPhoneNumber } from "../../../../utils/form.utils.js";
export const PROFILE_FORM_CONTROLS = [
    { value: 'pochta@yandex.ru', inputType: 'email', name: 'email', label: 'Почта', required: true, validationFn: [checkEmail] },
    { value: 'ivanivanov', name: 'login', label: 'Логин', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { value: 'Иван', name: 'first_name', label: 'Имя', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { value: 'Иванов', name: 'second_name', label: 'Фамилия', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { value: 'Иван', name: 'display_name', label: 'Имя в чате', required: true, validationFn: [checkAllowedLengthAndTypeChar] },
    { value: '89099673030', name: 'phone', label: 'Телефон', required: true, validationFn: [checkPhoneNumber] },
];
//# sourceMappingURL=ProfileForm.config.js.map