import { Popup } from "../../components/Popup/Popup.js";
import { render } from "../../utils/common.utils.js";
import { SigninForm } from "./components/SigninForm/SignupForm.js";
const SigninPopup = new Popup({
    title: 'Регистрация',
    isActive: true
}, [new SigninForm()]);
render(".signin-page", SigninPopup);
