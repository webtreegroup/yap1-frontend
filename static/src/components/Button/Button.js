import { Block } from "../../Block.js";
import { buttonTmplRender } from "./Button.tmpl.js";
export class Span extends Block {
    constructor(props) {
        console.log('Span Contructor')
        super("span", props);
    }
    render() {
        return `${this.props.text}`;
    }
}
export class Button extends Block {
    constructor(props) {
        const children = new Span({
            text: 'Button span',
        });
        console.log('Button Contructor', children)

        super("button", props, children);
        setTimeout(() => {
            children === null || children === void 0 ? void 0 : children.setProps({
                text: 'Click me, please',
            });
        }, 3000);
    }
    createResources({ className = 'btn_primary', btnType = 'button' }) {
        var _a, _b;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('btn', className);
        (_b = this._element) === null || _b === void 0 ? void 0 : _b.setAttribute('type', btnType);
    }
    render() {
        return buttonTmplRender(this.props);
    }
}
