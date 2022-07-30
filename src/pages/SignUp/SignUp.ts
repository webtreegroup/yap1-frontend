import { AuthAPI, SignUpContract } from 'core/api'
import { Component, ComponentChildrenProps } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { Router, ROUTES } from 'core/router'
import { formDataToObj, getResponseBody } from 'utils'
import { SignUpForm } from './components'
import { Notification } from 'components'

interface SignUpProps extends ComponentProps {
    onSignUp: (formData: FormData) => void
}

export class SignUp extends Component<HTMLDivElement, SignUpProps> {
    constructor(props: SignUpProps, children?: ComponentChildrenProps) {
        const FormComponent = new SignUpForm({ onSubmit: props.onSignUp })

        super(
            'div',
            {
                ...props,
                className: ['SignUp', 'vh-100'],
            },
            {
                ...children,
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
    createComponent(): SignUp {
        const NotificationComponent = new Notification()

        const NotificationContainer = new Component(
            'div',
            {
                className: [
                    'toast-container',
                    'position-fixed',
                    'bottom-0',
                    'end-0',
                    'p-3',
                ],
            },
            {
                NotificationComponent,
            },
        )

        const onSignUp = (request: FormData): void => {
            console.log('loader on...')

            const body = formDataToObj<SignUpContract>(request)

            AuthAPI.signup(body)
                .then((response) => {
                    const responseBody = getResponseBody(response.response)

                    switch (response.status) {
                        case 200:
                            Router.go(ROUTES.HOME.path)
                            break
                        default:
                            NotificationComponent?.showNote({
                                title: responseBody.message,
                                bgColor: 'danger',
                            })
                    }
                })
                .finally(() => {
                    console.log('loader off...')
                })
        }

        const component = new SignUp(
            {
                onSignUp,
            },
            { NotificationContainer },
        )

        return component
    }
}
