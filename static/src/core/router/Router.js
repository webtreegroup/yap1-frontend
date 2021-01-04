class Route {
    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }
    get pathname() {
        return this._pathname;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }
    leave() {
        var _a;
        (_a = this._block) === null || _a === void 0 ? void 0 : _a.hide();
    }
    match(pathname) {
        return pathname === this._pathname;
    }
    render() {
        var _a;
        if (!this._block) {
            const instance = new this._blockClass();
            this._block = instance && 'createBlock' in instance
                ? instance.createBlock()
                : instance;
        }
        (_a = this._block) === null || _a === void 0 ? void 0 : _a.show(this._props.rootQuery);
    }
}
export class Router {
    static use(pathname, block) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }
    static start(_) {
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
    static reload() {
        this.history.go();
    }
    static getRoute(pathname) {
        const route = this.routes.find(route => {
            const pattern = new RegExp(`^${route.pathname}$`, 'g');
            const result = pathname.match(pattern);
            return result;
        });
        return route;
    }
}
Router._currentRoute = null;
Router.history = window.history;
Router.routes = [];
Router._rootQuery = '.app';
//# sourceMappingURL=Router.js.map