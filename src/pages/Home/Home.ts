import { List } from "../../components/List/List.js"
import { Block } from "../../core/Block.js"
import { ROUTES } from "../../core/router/Router.config.js"
import { homeTmplRender } from "./Home.tmpl.js"

export class Home extends Block<HTMLDivElement> {
    constructor(){
        const MainNavigation = new List({ list: Object.values(ROUTES) })

        super(
            'main', 
            { className: 'index-page' }, 
            { 'MainNavigation': MainNavigation }, 
            homeTmplRender
        )
    }
}
