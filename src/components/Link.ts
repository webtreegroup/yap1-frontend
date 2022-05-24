import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { Router } from 'core/router'

export interface LinkProps extends ComponentProps {
    title?: string
    path?: string
    onClick?: () => void
}

export class Link extends Component<HTMLLinkElement> {
    constructor(props: LinkProps) {
        super('a', props)
    }

    createResources({ onClick, path }: LinkProps): void {
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
        return `${this.props?.title || 'Ссылка'}`
    }
}
