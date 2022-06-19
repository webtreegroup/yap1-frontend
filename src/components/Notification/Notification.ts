import { Component, ComponentChildrenProps } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { Toast } from 'bootstrap'

export interface NotificationProps extends ComponentProps {
    title?: string
}

export class Notification extends Component<HTMLDivElement, NotificationProps> {
    toastIntance: Toast | null = null

    constructor(
        props: NotificationProps = {},
        children: ComponentChildrenProps = {},
    ) {
        super(
            'div',
            {
                ...props,
                className: [
                    'toast',
                    'align-items-center',
                    'text-bg-primary',
                    'border-0',
                ],
            },
            children,
        )

        this.mountToast()
    }

    public show(title?: string): void {
        if (!this.toastIntance) return

        if (title) {
            this.props.title = title
        }

        this.toastIntance.show()
    }

    mountToast(): void {
        if (!this.element) return

        this.toastIntance = Toast.getOrCreateInstance(this.element, {
            autohide: false,
        })
    }

    createResources(): void {
        this.element?.setAttribute('role', 'alert')
        this.element?.setAttribute('aria-live', 'assertive')
        this.element?.setAttribute('aria-atomic', 'true')
    }

    setComponentTemplate({ title }: NotificationProps): string {
        return `
            <div class="d-flex">
                <div class="toast-body">
                    ${title || ''}
                </div>
                
                <button 
                    type="button" 
                    class="btn-close btn-close-white me-2 m-auto" 
                    data-bs-dismiss="toast" 
                    aria-label="Close"
                >
                </button>
            </div>
        `
    }
}
