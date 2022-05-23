import { Button, Form, InputControl, Link } from 'components'
import { ISignup } from 'core/api'
import { ROUTES } from 'core/router'
import { SIGNUP_FORM_CONTROLS } from './SignupForm.config'
import { signupFormTmplRender } from './SignupForm.tmpl'
import { ISignupForm } from './SignupForm.types'

export class SignupForm extends Form<ISignupForm> {
    constructor(props?: ISignupForm) {
        const controls = SIGNUP_FORM_CONTROLS.map((el) => new InputControl(el))
        const BtnSubmit = new Button({
            text: 'Зарегистрироваться',
            btnType: 'submit',
        })
        const SigninLink = new Link({
            path: ROUTES.SIGNIN.path,
            title: ROUTES.SIGNIN.title,
        })

        super(props, {
            fields: [...controls, BtnSubmit],
            SigninLink,
        })
    }

    onSubmit(request: ISignup): void {
        this.props.onSignup?.(request)
    }

    componentShouldRender(): string {
        return signupFormTmplRender()
    }
}
