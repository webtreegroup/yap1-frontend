import { Popup } from "../components/Popup/Popup.js";
import { render } from "../utils/common.utils.js";
const LoginPopup = new Popup({
    title: 'Вход',
    isActive: true,
    children: 'test'
});
render(".login-page", LoginPopup);
