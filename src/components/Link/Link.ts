import { Block } from "../../core/Block.js"
import { ILink } from "./Link.types.js"
import { linkTmplRender } from "./Link.tmpl.js"

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
            onClick?.()
        }
        if (onClick) this._element?.addEventListener('click', onClickWrapper)
    }

    render() {
        return linkTmplRender(this.props)
    }
}
