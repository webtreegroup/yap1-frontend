import { Popup } from "../../components/Popup/Popup.js"
import { HTTP } from "../../core/Api.js"
import { render } from "../../utils/common.utils.js"
import { LoginForm } from "./components/LoginForm/SigninForm.js"

const LoginFormComponent = new LoginForm()

const LoginPopup = new Popup({
    title: 'Вход',
    isActive: true
}, [LoginFormComponent])

render(".login-page", LoginPopup)


/****************************
 * TODO: практика
 ****************************/

HTTP.get('chats')
HTTP.get('chats', {
    data: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
})
HTTP.post('chats', {
    data: {
        "title": "first chat"
    }
})
