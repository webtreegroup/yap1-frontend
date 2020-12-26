
import { Store } from '../App.types'
import { render } from '../utils/common.utils'
import { Block } from './Block'

interface IBlockConstructor {
    new (): Block
}

class Route {
    _pathname: string
    _blockClass: IBlockConstructor
    _block: Block | null
    _props: Store

    constructor(pathname: string, view: IBlockConstructor, props: Store) {
        this._pathname = pathname
        this._blockClass = view
        this._block = null
        this._props = props
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname
            this.render()
        }
    }

    leave() {
        if (this._block) {
            this._block.hide()
        }
    }

    match(pathname: string) {
        return pathname === this._pathname
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass()

            if (this._block) render(this._props.rootQuery, this._block)

            return
        }

        this._block.show()
    }
} 

export class Router {
    static _currentRoute: Route | null | undefined = null
    static history: History = window.history
    static routes: Route[] = []
    static _rootQuery: string = '.app'

    static use(pathname: string, block: IBlockConstructor) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery })

        this.routes.push(route)

        return this
    } 

    static start() {
        window.onpopstate = (event: PopStateEvent) => {
            const target = event?.currentTarget as Window
            this._onRoute(target?.location.pathname);
        };

        this._currentRoute = this.getRoute(window.location.pathname);
        this._onRoute(window.location.pathname);
    }

    static _onRoute(pathname: string) {
        const route = Router.getRoute(pathname)
        if (!route) {
            return
        }
    
        if (this._currentRoute) {
                this._currentRoute.leave()
        }
    
        route.render()
    }

    static go(pathname: string) {
        this.history.pushState({}, "", pathname)
        this._onRoute(pathname)
    }

    static getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname))
    }
}
