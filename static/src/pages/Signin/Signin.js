import { Popup } from "../../components/index.js";
import { render } from "../../utils/common.utils.js";
import { LoginForm } from "./components/index.js";
const SigninFormComponent = new LoginForm();
const SigninPopup = new Popup({
    title: 'Регистрация',
    isActive: true
}, [SigninFormComponent]);
render(".signin-page", SigninPopup);
