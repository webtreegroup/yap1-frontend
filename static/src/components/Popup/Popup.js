import { Block } from "../../core/Block.js";
import { classNames } from "../../utils/common.utils.js";
import { Link } from "../Link/Link.js";
import { popupTmplRender } from "./Popup.tmpl.js";
export class Popup extends Block {
    constructor(props, children) {
        super("div", props, children);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.toggle = this.toggle.bind(this);
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
        const classes = classNames([
            'popup-wrap',
            isActive
                ? 'popup-wrap_active'
                : undefined
        ]);
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add(...classes);
    }
    render() {
        const ToggleAddPopupVisibility = new Link({
            onClick: () => {
                this.hide();
            },
            title: `
                <svg height="511.99998pt" viewBox="1 1 511.99998 511.99998" width="511.99998pt" xmlns="http://www.w3.org/2000/svg"><path fill="#3369F3" d="m256 0C114.613281.0.0 114.613281.0 256s114.613281 256 256 256 256-114.613281 256-256c-.167969-141.316406-114.683594-255.832031-256-256zm0 480C132.289062 480 32 379.710938 32 256S132.289062 32 256 32s224 100.289062 224 224c-.132812 123.65625-100.34375 223.867188-224 224zm0 0"/><path fill="#3369F3" d="m380.449219 131.550781c-6.25-6.246093-16.378907-6.246093-22.625.0L256 233.375 154.175781 131.550781c-6.140625-6.355469-16.269531-6.53125-22.625-.390625-6.355469 6.136719-6.53125 16.265625-.390625 22.621094.128906.132812.257813.265625.390625.394531L233.375 256l-101.824219 101.824219c-6.355469 6.136719-6.53125 16.265625-.390625 22.625 6.136719 6.355469 16.265625 6.53125 22.621094.390625.132812-.128906.265625-.257813.394531-.390625L256 278.625l101.824219 101.824219c6.355469 6.136719 16.484375 5.960937 22.621093-.394531 5.988282-6.199219 5.988282-16.03125.0-22.230469l-101.820312-101.824219 101.824219-101.824219c6.246093-6.246093 6.246093-16.375.0-22.625zm0 0"/></svg>
            `,
            className: 'popup__close'
        });
        if (this.props.isClosable) {
            this._children = this._children
                ? [...this._children, ToggleAddPopupVisibility]
                : [ToggleAddPopupVisibility];
        }
        return popupTmplRender(this.props);
    }
}
