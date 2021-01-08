import { List } from "../../components/List/List"
import { Block } from "../../core/block/Block"
import { ROUTES } from "../../core/router/Router.config"
import { homeTmplRender } from "./Home.tmpl"

export class Home extends Block<HTMLDivElement> {
    constructor(){
        const MainNavigation = new List({ list: Object.values(ROUTES).filter(el => el.path !== '/') })

        super(
            'main', 
            { className: 'index-page' }, 
            { MainNavigation }, 
            homeTmplRender
        )
    }
}
