import { Block } from "../../core/Block.js"
import { ILink } from "./Link.types.js"
import { linkTmplRender } from "./Link.tmpl.js"

export class Link extends Block<HTMLLinkElement> {
    constructor(props: ILink) {
        super("a", props)
    }

    createResources({ onClick }: ILink) {
        this._element?.setAttribute('href', '#')
        if (onClick) this._element?.addEventListener('click', onClick)
    }

    render() {
        return linkTmplRender(this.props)
    }
}
