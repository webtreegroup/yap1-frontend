
import { IState } from '../../App.types.js'
import { Block } from '../Block.js'

export interface IBlockConstructor {
    new (): any
}

class Route {
    _pathname: string
    _blockClass: IBlockConstructor
    _block: Block | null
    _props: IState

    constructor(pathname: string, view: IBlockConstructor, props: IState) {
        this._pathname = pathname
        this._blockClass = view
        this._block = null
        this._props = props
    }

    get pathname() {
        return this._pathname
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname
            this.render()
        }
    }

    leave() {
        this._block?.hide()
    }

    match(pathname: string) {
        return pathname === this._pathname
    }

    render() {
        if (!this._block) {
            const instance = new this._blockClass()
            this._block = instance && 'createBlock' in instance 
                ? instance.createBlock()
                : instance
        }

        this._block?.show(this._props.rootQuery)
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
        }

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
            this._currentRoute = route
        }
    
        route.render()
    }

    static go(pathname: string) {
        this.history.pushState({}, "", pathname)
        this._onRoute(pathname)
    }

    static getRoute(pathname: string) {
        const route = this.routes.find(route => {
            const pattern = new RegExp(`^${route.pathname}$`, 'g')
            const result = pathname.match(pattern)
            
            return result
        })
        

        return route
    }
}
