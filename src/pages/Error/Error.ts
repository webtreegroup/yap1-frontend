import { Link } from "../../components/Link/Link.js"
import { Block } from "../../core/Block.js"
import { ROUTES } from "../../core/Router.config.js"
import { errorTmplRender } from "./Error.tmpl.js"

export class ErrorPage extends Block<HTMLDivElement> {
    constructor(){
        const link = new Link(ROUTES.HOME)

        super(
            'main', 
            { className: 'error-page' }, 
            [link], 
            errorTmplRender
        )
    }
}
