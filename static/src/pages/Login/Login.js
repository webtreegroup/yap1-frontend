import { Popup } from "../../components/Popup/Popup.js";
import { render } from "../../utils/common.utils.js";
import { LoginForm } from "./components/LoginForm/LoginForm.js";
const LoginFormComponent = new LoginForm();
const LoginPopup = new Popup({
    title: 'Вход',
    isActive: true
}, [LoginFormComponent]);
render(".login-page", LoginPopup);
//# sourceMappingURL=Login.js.map