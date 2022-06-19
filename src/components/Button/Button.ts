import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { Router } from 'core/router'

export interface ButtonProps extends ComponentProps {
    title?: string
    path?: string
    type?: 'btn-secondary' | 'btn-danger' | 'btn-primary'
    onClick?: () => void
}

export class Button extends Component<HTMLButtonElement> {
    constructor({ type = 'btn-primary', className, ...props }: ButtonProps) {
        super('button', {
            ...props,
            className: ['btn', type, className],
        })
    }

    createResources({ onClick, path }: ButtonProps): void {
        this.element?.setAttribute('href', path || '#')

        function onClickWrapper(e: Event) {
            e.preventDefault()

            if (path) {
                Router.go(path)

                return
            }

            onClick?.()
        }

        this.element?.addEventListener('click', onClickWrapper)
    }

    setComponentTemplate(): string {
        return `${this.props?.title || 'Кнопка'}`
    }
}
