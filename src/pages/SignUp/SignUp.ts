import { AuthAPI, ISignup, SIGNIN_FAIL_MESSAGE } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { Router, ROUTES } from 'core/router'
import { formDataToObj } from 'utils'
import { SignUpForm } from './components'

interface SignUpProps extends ComponentProps {
    onSignUp: (formData: FormData) => void
}

export class SignUp extends Component<HTMLDivElement, SignUpProps> {
    constructor(props: SignUpProps) {
        const FormComponent = new SignUpForm({ onSubmit: props.onSignUp })

        super(
            'div',
            {
                ...props,
                className: ['SignUp', 'vh-100'],
            },
            {
                FormComponent,
            },
        )
    }

    public setComponentTemplate(): string {
        return `
            <div class="modal modal-signup position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignup">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0">
                            <h2 class="fw-bold mb-0">Зарегистироваться</h2>
                        </div>
                
                        <div class="modal-body p-5 pt-0" data-component="FormComponent"></div>
                    </div>
                </div>
            </div>
        `
    }
}

export class SignUpContainer {
    onSignUp(request: FormData): void {
        console.log('loader on...')

        const body = formDataToObj<ISignup>(request)

        if (!body.login || !body.password) {
            alert('Логин и пароль обязательны для заполнения!')

            return
        }

        AuthAPI.signup(body)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        Router.go(ROUTES.CHATS.path)
                        break
                    default:
                        alert(SIGNIN_FAIL_MESSAGE)
                }
            })
            .finally(() => {
                console.log('loader off...')
            })
    }

    createBlock(): SignUp {
        const component = new SignUp({
            onSignUp: this.onSignUp,
        })

        return component
    }
}
