import { List } from "../../components/List/List.js";
import { Block } from "../../core/block/Block.js";
import { ROUTES } from "../../core/router/Router.config.js";
import { homeTmplRender } from "./Home.tmpl.js";
export class Home extends Block {
    constructor() {
        const MainNavigation = new List({ list: Object.values(ROUTES).filter(el => el.path !== '/') });
        super('main', { className: 'index-page' }, { MainNavigation }, homeTmplRender);
    }
}
//# sourceMappingURL=Home.js.map