import { Component, ComponentProps } from 'core/block'

interface ChatFormProps extends ComponentProps {
    onSubmit: (formData: FormData) => void
}

export class ChatForm extends Component<HTMLFormElement, ChatFormProps> {
    constructor(props: ChatFormProps) {
        super('form', {
            ...props,
            className: 'ChatForm',
        })
    }

    public createResources(
        props: ChatFormProps,
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
                <label for="message" class="form-label">Название чата</label>
                
                <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    name="name"
                    placeholder="Введите значение"
                >
            </div>

            <div class="text-end">
                <button type="submit" class="btn btn-primary">Далее</button>
            </div>
        `
    }
}
