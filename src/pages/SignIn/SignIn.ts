import { AuthAPI, SignInContract } from 'core/api'
import { Component, ComponentChildrenProps } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { eventEmitter, EVENTS } from 'core/helpers'
import { Router, ROUTES } from 'core/router'
import { formDataToObj, getResponseBody } from 'utils'
import { SignInForm } from './components'

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
    createComponent(): SignIn {
        const onSignin = (request: FormData): void => {
            console.log('loader on...')

            const body = formDataToObj<SignInContract>(request)

            AuthAPI.signin(body)
                .then((response) => {
                    const responseBody = getResponseBody(response.response)

                    switch (response.status) {
                        case 200:
                            Router.go(ROUTES.HOME.path)
                            break
                        default:
                            eventEmitter.emit(EVENTS.NOTIFICATION_SHOW, {
                                title: responseBody.message,
                                bgColor: 'danger',
                            })
                    }
                })
                .finally(() => {
                    console.log('loader off...')
                })
        }

        const component = new SignIn({
            onSignin,
        })

        return component
    }
}
