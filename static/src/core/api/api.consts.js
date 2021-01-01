export var METHOD;
(function (METHOD) {
    METHOD["GET"] = "GET";
    METHOD["POST"] = "POST";
    METHOD["PUT"] = "PUT";
    METHOD["DELETE"] = "DELETE";
})(METHOD || (METHOD = {}));
export const SIGNIN_FAIL_MESSAGE = 'Что то пошло не так!\nПроверьте правильность введенных данных.';
export const PROFILE_CHANGE_SUCCESS_MESSAGE = 'Данные успешное обновлены!';
export const PROFILE_CHANGE_FAIL_MESSAGE = 'Не удалось обновить данные.\nЧто то пошло не так!';
