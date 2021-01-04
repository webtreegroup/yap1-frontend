import { Block } from "../../core/block/Block.js"
import { ILink } from "./Link.types.js"
import { linkTmplRender } from "./Link.tmpl.js"
import { Router } from "../../core/router/Router.js"

export class Link extends Block<HTMLLinkElement> {
    constructor(props: ILink) {
        super(
            "a", 
            props,
        )
    }

    createResources({ onClick, path }: ILink) {
        this._element?.setAttribute('href', path || '#')
        
        function onClickWrapper(e: Event) {
            e.preventDefault()

            if (path) Router.go(path)

            onClick?.()
        }

        this._element?.addEventListener('click', onClickWrapper)
    }

    render() {
        return linkTmplRender(this.props)
    }
}
