import { AuthAPI, SignInContract } from 'core/api'
import { Component, ComponentChildrenProps } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { Router, ROUTES } from 'core/router'
import { formDataToObj, getResponse } from 'utils'
import { SignInForm } from './components'
import { Notification } from 'components'

interface SignInProps extends ComponentProps {
    onSignin: (formData: FormData) => void
}

export class SignIn extends Component<HTMLDivElement, SignInProps> {
    constructor(props: SignInProps, children?: ComponentChildrenProps) {
        const FormComponent = new SignInForm({ onSubmit: props.onSignin })

        super(
            'div',
            {
                ...props,
                className: ['SignIn', 'vh-100'],
            },
            {
                ...children,
                FormComponent,
            },
        )
    }

    public setComponentTemplate(): string {
        return `
            <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0">
                            <h2 class="fw-bold mb-0">Войти</h2>
                        </div>
                
                        <div class="modal-body p-5 pt-0" data-component="FormComponent"></div>
                    </div>
                </div>
            </div>
        `
    }
}

export class SignInContainer {
    createBlock(): SignIn {
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

        const onSignin = (request: FormData): void => {
            console.log('loader on...')

            const body = formDataToObj<SignInContract>(request)

            AuthAPI.signin(body)
                .then((response) => {
                    const responseBody = getResponse(response.response)

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

        const component = new SignIn(
            {
                onSignin,
            },
            { NotificationContainer },
        )

        return component
    }
}
