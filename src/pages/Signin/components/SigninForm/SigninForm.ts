import {
    Button,
    Form,
    InputControl,
    Link,
} from 'components'
import { ISignin } from 'core/api'
import { ROUTES } from 'core/router'
import { LOGIN_FORM_CONTROLS } from './SigninForm.config'
import { loginFormTmplRender } from './SigninForm.tmpl'
import { ISigninForm } from './SigninForm.types'

export class SigninForm extends Form<ISigninForm> {
    constructor(props?: ISigninForm) {
        const controls = LOGIN_FORM_CONTROLS.map((el) => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Авторизоваться', btnType: 'submit' })
        const SignupLink = new Link({
            path: ROUTES.SIGNUP.path,
            title: ROUTES.SIGNUP.title,
        })

        super(
            props,
            {
                fields: [...controls, BtnSubmit],
                SignupLink,
            },
        )
    }

    onSubmit(request: ISignin): void {
        this.props.onSignin?.(request)
    }

    render(): string {
        return loginFormTmplRender()
    }
}
