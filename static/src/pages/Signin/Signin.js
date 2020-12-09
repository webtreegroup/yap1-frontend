import { Popup } from "../../components/Popup/Popup.js";
import { render } from "../../utils/common.utils.js";
import { SigninForm } from "./components/SigninForm/SigninForm.js";
const SigninFormComponent = new SigninForm();
const SigninPopup = new Popup({
    title: 'Регистрация',
    isActive: true
}, [SigninFormComponent]);
render(".signin-page", SigninPopup);
