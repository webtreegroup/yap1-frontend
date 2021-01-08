import { Link } from "../../components/Link/Link"
import { Block } from "../../core/block/Block"
import { ROUTES } from "../../core/router/Router.config"
import { errorTmplRender } from "./Error.tmpl"

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
