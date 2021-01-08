import { Block } from "../../core/block/Block"
import { ILink } from "./Link.types"
import { linkTmplRender } from "./Link.tmpl"
import { Router } from "../../core/router/Router"

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
