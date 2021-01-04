import { Link } from "../../components/Link/Link.js"
import { Block } from "../../core/block/Block.js"
import { ROUTES } from "../../core/router/Router.config.js"
import { errorTmplRender } from "./Error.tmpl.js"

export class ErrorPage extends Block<HTMLDivElement> {
    constructor(){
        const link = new Link(ROUTES.HOME)

        super(
            'main', 
            { className: 'error-page' }, 
            { root: [link] }, 
            errorTmplRender
        )
    }
}
