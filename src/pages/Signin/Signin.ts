import { Popup } from "../../components/Popup/Popup.js"
import { render } from "../../utils/common.utils.js"
import { LoginForm } from "../Login/components/LoginForm/LoginForm.js"

const SigninFormComponent = new LoginForm()

const SigninPopup = new Popup({
    title: 'Регистрация',
    isActive: true
}, [SigninFormComponent])

render(".signin-page", SigninPopup)