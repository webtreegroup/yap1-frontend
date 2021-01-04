import { Block } from "../../core/block/Block.js";
import { linkTmplRender } from "./Link.tmpl.js";
import { Router } from "../../core/router/Router.js";
export class Link extends Block {
    constructor(props) {
        super("a", props);
    }
    createResources({ onClick, path }) {
        var _a, _b;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.setAttribute('href', path || '#');
        function onClickWrapper(e) {
            e.preventDefault();
            if (path)
                Router.go(path);
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }
        (_b = this._element) === null || _b === void 0 ? void 0 : _b.addEventListener('click', onClickWrapper);
    }
    render() {
        return linkTmplRender(this.props);
    }
}
//# sourceMappingURL=Link.js.map