class Route {
    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }
    leave() {
        if (this._block) {
            this._block.hide();
        }
    }
    match(pathname) {
        return pathname === this._pathname;
    }
    render() {
        if (!this._block) {
            this._block = new this._blockClass();
        }
        this._block.show(this._props.rootQuery);
    }
}
export class Router {
    static use(pathname, block) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }
    static start() {
        window.onpopstate = (event) => {
            const target = event === null || event === void 0 ? void 0 : event.currentTarget;
            this._onRoute(target === null || target === void 0 ? void 0 : target.location.pathname);
        };
        this._currentRoute = this.getRoute(window.location.pathname);
        this._onRoute(window.location.pathname);
    }
    static _onRoute(pathname) {
        const route = Router.getRoute(pathname);
        if (!route) {
            return;
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
            this._currentRoute = route;
        }
        route.render();
    }
    static go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }
    static getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
}
Router._currentRoute = null;
Router.history = window.history;
Router.routes = [];
Router._rootQuery = '.app';
