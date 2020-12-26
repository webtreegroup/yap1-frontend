import { List } from "../../components/List/List.js";
import { Block } from "../../core/Block.js";
import { NAVIGATION_LINKS } from "./Home.config.js";
import { homeTmplRender } from "./Home.tmpl.js";
export class Home extends Block {
    constructor() {
        debugger;
        const MainNavigation = new List({ list: NAVIGATION_LINKS });
        super('main', { className: 'index-page' }, { 'MainNavigation': MainNavigation }, homeTmplRender);
    }
}
