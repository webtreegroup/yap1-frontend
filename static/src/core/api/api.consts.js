export var METHOD;
(function (METHOD) {
    METHOD["GET"] = "GET";
    METHOD["POST"] = "POST";
    METHOD["PUT"] = "PUT";
    METHOD["DELETE"] = "DELETE";
})(METHOD || (METHOD = {}));
export const SIGNIN_FAIL_MESSAGE = 'Что то пошло не так!\nПроверьте правильность введенных данных.';
export const CHANGE_PASS_SUCCESS_MESSAGE = 'Пароль успешно изменен!';
export const CHANGE_PASS_FAIL_MESSAGE = 'Не удалось обновить пароль.\nЧто то пошло не так!';
export const CHANGE_PROFILE_SUCCESS_MESSAGE = 'Данные успешное обновлены!';
export const CHANGE_PROFILE_FAIL_MESSAGE = 'Не удалось обновить данные.\nЧто то пошло не так!';
