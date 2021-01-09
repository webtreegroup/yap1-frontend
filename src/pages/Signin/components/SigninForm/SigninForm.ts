import { Button } from '../../../../components/Button/Button'
import { Form } from '../../../../components/Form/Form'
import { InputControl } from '../../../../components/InputControl/InputControl'
import { Link } from '../../../../components/Link/Link'
import { ISignin } from '../../../../core/api/auth.api'
import { ROUTES } from '../../../../core/router/Router.config'
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

    onSubmit(request: ISignin) {
        this.props.onSignin?.(request)
    }

    render() {
        return loginFormTmplRender()
    }
}
