import { Popup } from "../../components/Popup/Popup.js"
// import { HTTP } from "../../core/Api.js"
import { Block } from "../../core/Block.js"
import { LoginForm } from "./components/LoginForm/SigninForm.js"

export class Signin extends Block<HTMLDivElement> {
    constructor() {
        const LoginFormComponent = new LoginForm()

        const LoginPopup = new Popup({
            title: 'Вход',
            isActive: true
        }, [LoginFormComponent])

        super(
            'main', 
            { className: 'login-page' }, 
            [LoginPopup], 
        )
    }
}

/****************************
 * TODO: практика
 ****************************/

// HTTP.get('auth/user')
// HTTP.get('chats', {
//     data: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
// })
// HTTP.post('auth/signin', {
//     data: {
//         login: 'SanchoPansoYo',
//         password: 'SanchoPansoYo123'
//     }
// })