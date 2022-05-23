import { Block } from 'core/block'
import { Router } from 'core/router'
import { LinkProps } from './Link.types'
import { linkTmplRender } from './Link.tmpl'

export class Link extends Block<HTMLLinkElement> {
    constructor(props: LinkProps) {
        super('a', props)
    }

    createResources({ onClick, path }: LinkProps): void {
        this.element?.setAttribute('href', path || '#')

        function onClickWrapper(e: Event) {
            e.preventDefault()

            if (path) Router.go(path)

            onClick?.()
        }

        this.element?.addEventListener('click', onClickWrapper)
    }

    setHtmlTemplate(): string {
        return linkTmplRender(this.props)
    }
}
