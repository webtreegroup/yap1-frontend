import { Button } from 'components'
import { Component, ComponentProps } from 'core/block'
import { ROUTES } from 'core/router'

interface SignInFormProps extends ComponentProps {
    onSubmit: (formData: FormData) => void
}

export class SignInForm extends Component<HTMLFormElement, SignInFormProps> {
    constructor(props: SignInFormProps) {
        const ButtonSignUp = new Button({
            path: ROUTES.SIGNUP.path,
            type: 'btn-danger',
            title: 'Зарегистрироваться',
        })

        super(
            'form',
            {
                ...props,
                className: 'SignInForm',
            },
            {
                Buttons: [ButtonSignUp],
            },
        )
    }

    public createResources(
        props: SignInFormProps,
        documentElement: HTMLFormElement | null,
    ): void {
        documentElement?.addEventListener('submit', (event) => {
            event.preventDefault()

            const formData = new FormData(documentElement)

            props.onSubmit(formData)
        })
    }

    public setComponentTemplate(): string {
        return `
            <div class="mb-3">
                <label for="login" class="form-label">Логин</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="login" 
                    name="login"
                    placeholder="Введите значение"
                >
            </div>

            <div class="mb-3">
                <label for="Password" class="form-label">Пароль</label>

                <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    name="password" 
                    placeholder="Введите значение"
                >
            </div>

            <div class="text-center" data-component="Buttons">
                <button 
                    class="w-100 mb-2 me-2 btn rounded-3 btn-primary" 
                    type="submit"
                >
                    Войти
                </button>
            </div>
        `
    }
}
