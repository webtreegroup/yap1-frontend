import { List } from 'components'
import { Block } from 'core/block'
import { ROUTES } from 'core/router'
import { homeTmplRender } from './Home.tmpl'

export class Home extends Block<HTMLDivElement> {
    constructor() {
        const MainNavigation = new List({ list: Object.values(ROUTES).filter((el) => el.path !== '/') })

        super(
            'main',
            { className: 'index-page' },
            { MainNavigation },
            homeTmplRender,
        )
    }
}
