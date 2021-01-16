import { Route } from './Route'

export interface IBlockConstructor {
    new (): any
}

export class Router {
    static _currentRoute: Route | null | undefined = null

    static history: History = window.history

    static routes: Route[] = []

    static _rootQuery = '.app'

    static use(pathname: string, block: IBlockConstructor): typeof Router {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery })

        this.routes.push(route)

        return this
    }

    static start(): void {
        window.onpopstate = (event: PopStateEvent) => {
            const target = event?.currentTarget as Window
            this._onRoute(target?.location.pathname)
        }

        this._currentRoute = this.getRoute(window.location.pathname)
        this._onRoute(window.location.pathname)
    }

    static _onRoute(pathname: string): void {
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

    static go(pathname: string): void {
        this.history.pushState({}, '', pathname)
        this._onRoute(pathname)
    }

    static reload(): void {
        this.history.go()
    }

    static getRoute(pathname: string): Route | undefined {
        const route = this.routes.find((route) => {
            const pattern = new RegExp(`^${route.pathname}$`, 'g')
            const result = pathname.match(pattern)

            return result
        })

        return route
    }
}
