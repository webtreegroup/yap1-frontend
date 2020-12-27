import { Block } from "../../core/Block.js"
import { ILink } from "./Link.types.js"
import { linkTmplRender } from "./Link.tmpl.js"
import { Router } from "../../core/Router.js"

export class Link extends Block<HTMLLinkElement> {
    constructor(props: ILink) {
        super(
            "a", 
            props,
        )
    }

    createResources({ onClick, href }: ILink) {
        this._element?.setAttribute('href', href || '#')
        
        function onClickWrapper(e: Event) {
            e.preventDefault()

            if (href) Router.go(href)

            onClick?.()
        }

        this._element?.addEventListener('click', onClickWrapper)
    }

    render() {
        return linkTmplRender(this.props)
    }
}
