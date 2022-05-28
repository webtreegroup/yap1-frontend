import { Component, ComponentChildrenProps } from 'core/block'
import { ComponentProps } from 'core/block/Component'

export interface NotificationProps extends ComponentProps {
    title: string
}

export class Notification extends Component<HTMLDivElement, NotificationProps> {
    constructor(
        props: NotificationProps,
        children = {} as ComponentChildrenProps,
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
    }

    createResources(_props: NotificationProps): void {
        this.element?.setAttribute('id', 'notification')
        this.element?.setAttribute('role', 'alert')
        this.element?.setAttribute('aria-live', 'assertive')
        this.element?.setAttribute('aria-atomic', 'true')
    }

    setComponentTemplate({ title }: NotificationProps): string {
        return `
            <div class="d-flex">
            <div class="toast-body">
                ${title}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `
    }
}
