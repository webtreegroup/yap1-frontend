import { Button } from 'components/Button'
import { UserContract } from 'core/api'
import { Component, ComponentProps } from 'core/block'
import { ROUTES } from 'core/router'

interface ProfileEditFormProps extends ComponentProps {
    onSubmit?: (formData: FormData) => void
    initialValues?: UserContract
}

export class ProfileEditForm extends Component<
    HTMLFormElement,
    ProfileEditFormProps
> {
    constructor(props: ProfileEditFormProps) {
        const ButtonEdit = new Button({
            path: ROUTES.PROFILE.path,
            className: 'me-2',
            type: 'btn-secondary',
            title: 'Отмена',
        })

        super(
            'form',
            {
                ...props,
                className: 'ProfileEditForm',
            },
            {
                Buttons: [ButtonEdit],
            },
        )
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
            <input 
                type="hidden" 
                name="id" 
                value="${this.props.initialValues?.id}" 
            /> 

            <div class="mb-3">
                <label for="login" class="form-label">Логин</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="login" 
                    name="login"
                    placeholder="Введите значение"
                    value="${this.props.initialValues?.login}" 
                />
            </div>

            <div class="mb-3">
                <label for="firstName" class="form-label">Имя</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="firstName" 
                    name="firstName"
                    placeholder="Введите значение"
                    value="${this.props.initialValues?.firstName}" 
                />
            </div>

            <div class="mb-3">
                <label for="secondName" class="form-label">Фамилия</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="secondName" 
                    name="secondName"
                    placeholder="Введите значение"
                    value="${this.props.initialValues?.secondName}" 
                />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="email" 
                    name="email"
                    placeholder="Введите значение"
                    value="${this.props.initialValues?.email}" 
                />
            </div>

            <div class="mb-3">
                <label for="phone" class="form-label">Телефон</label>

                <input 
                    type="text" 
                    class="form-control" 
                    id="phone" 
                    name="phone"
                    placeholder="Введите значение"
                    value="${this.props.initialValues?.phone}" 
                />
            </div>

            <div class="text-center" data-component="Buttons">
                <button 
                    class="me-2 btn btn-primary" 
                    type="submit"
                >
                    Сохранить
                </button>
            </div>
        `
    }
}
