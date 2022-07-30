import { Component, ComponentChildrenProps } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { Toast } from 'bootstrap'
import { ColorTheme } from 'App.types'
import { eventEmitter, EVENTS } from 'core/helpers'

export interface NotificationProps extends ComponentProps {
    title?: string
    bgColor?: ColorTheme
}

export class AppNotification extends Component<
    HTMLDivElement,
    NotificationProps
> {
    toastIntance: Toast | null = null

    constructor(
        { bgColor = 'primary', ...props }: NotificationProps = {},
        children: ComponentChildrenProps = {},
    ) {
        super(
            'div',
            {
                ...props,
                className: [
                    'toast',
                    'align-items-center',
                    `text-bg-${bgColor}`,
                    'border-0',
                ],
            },
            children,
        )

        this.mountToast()
    }

    public changeBg(bgColor?: ColorTheme): void {
        this.removeClass([
            'text-bg-primary',
            'text-bg-secondary',
            'text-bg-success',
            'text-bg-danger',
            'text-bg-warning',
            'text-bg-info',
            'text-bg-light',
            'text-bg-dark',
        ])
        this.addClass(`text-bg-${bgColor}`)
    }

    public showNote({ title, bgColor }: NotificationProps): void {
        if (!this.toastIntance) return

        this.props.title = title
        if (bgColor) this.changeBg(bgColor)

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

    public componentDidMount(
        _props: NotificationProps,
        _documentElement: HTMLDivElement | null,
    ): void {
        eventEmitter.on(EVENTS.NOTIFICATION_SHOW, ({ title, bgColor }) => {
            this.showNote({
                title,
                bgColor,
            })
        })
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
