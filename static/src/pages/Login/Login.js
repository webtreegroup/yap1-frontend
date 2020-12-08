import { Popup } from "../../components/index.js";
import { render } from "../../utils/common.utils.js";
import { LoginForm } from "./components/index.js";
const LoginFormComponent = new LoginForm();
const LoginPopup = new Popup({
    title: 'Вход',
    isActive: true
}, [LoginFormComponent]);
render(".login-page", LoginPopup);
