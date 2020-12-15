import { Popup } from "../../components/Popup/Popup.js";
import { HTTPTransport } from "../../core/Api.js";
import { render } from "../../utils/common.utils.js";
import { LoginForm } from "./components/LoginForm/LoginForm.js";
const LoginFormComponent = new LoginForm();
const LoginPopup = new Popup({
    title: 'Вход',
    isActive: true
}, [LoginFormComponent]);
render(".login-page", LoginPopup);
/****************************
 * TODO: практика
 ****************************/
new HTTPTransport().get('https://ya-praktikum.tech/api/v2/chats');
//# sourceMappingURL=Login.js.map