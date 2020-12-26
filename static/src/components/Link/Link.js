import { Block } from "../../core/Block.js";
import { linkTmplRender } from "./Link.tmpl.js";
export class Link extends Block {
    constructor(props) {
        super("a", props);
    }
    createResources({ onClick, href }) {
        var _a, _b;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.setAttribute('href', href || '#');
        function onClickWrapper(e) {
            e.preventDefault();
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }
        if (onClick)
            (_b = this._element) === null || _b === void 0 ? void 0 : _b.addEventListener('click', onClickWrapper);
    }
    render() {
        return linkTmplRender(this.props);
    }
}
