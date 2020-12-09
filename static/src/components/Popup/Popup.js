import { Block } from "../../core/Block.js";
import { popupTmplRender } from "./Popup.tmpl.js";
export class Popup extends Block {
    constructor(props, children) {
        super("div", props, children);
        this.show = this.show.bind(this);
    }
    show() {
        var _a;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('popup-wrap_active');
    }
    hide() {
        var _a;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.remove('popup-wrap_active');
    }
    toggle() {
        var _a;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.toggle('popup-wrap_active');
    }
    createResources({ isActive }) {
        var _a;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('popup-wrap', isActive ? 'popup-wrap_active' : '');
    }
    render() {
        return popupTmplRender(Object.assign(Object.assign({}, this.props), { onToggleVisible: this.toggle }));
    }
}
