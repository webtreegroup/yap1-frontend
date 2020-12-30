import { Block } from "../../core/Block.js"
import { ILoader } from "./Loader.types.js"
import { loaderTmplRender } from "./Loader.tmpl.js"

export class Loader extends Block<HTMLLinkElement> {
    constructor(props: ILoader) {
        super(
            "div", 
            { ...props, className: 'loader' },
        )
    }

    render() {
        return loaderTmplRender(this.props)
    }
}
