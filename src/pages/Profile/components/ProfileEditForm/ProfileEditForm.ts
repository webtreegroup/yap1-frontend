import { Component, ComponentProps } from 'core/block'

interface ProfileEditFormProps extends ComponentProps {
    onSubmit?: (formData: FormData) => void
}

export class ProfileEditForm extends Component<
    HTMLFormElement,
    ProfileEditFormProps
> {
    constructor(props: ProfileEditFormProps) {
        super('form', {
            ...props,
            className: 'SignInForm',
        })
    }

    public createResources(
        props: ProfileEditFormProps,
        documentElement: HTMLFormElement | null,
    ): void {
        documentElement?.addEventListener('submit', (event) => {
            event.preventDefault()

            const formData = new FormData(documentElement)

            props.onSubmit?.(formData)
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
                <label for="firstName" class="form-label">Имя</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="firstName" 
                    name="firstName"
                    placeholder="Введите значение"
                >
            </div>

            <div class="mb-3">
                <label for="secondName" class="form-label">Фамилия</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="secondName" 
                    name="secondName"
                    placeholder="Введите значение"
                >
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="email" 
                    name="email"
                    placeholder="Введите значение"
                >
            </div>

            <div class="mb-3">
                <label for="phone" class="form-label">Телефон</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="phone" 
                    name="phone"
                    placeholder="Введите значение"
                >
            </div>

            <button 
                class="w-100 mb-2 btn rounded-3 btn-primary" 
                type="submit"
            >
                Войти
            </button>
        `
    }
}
