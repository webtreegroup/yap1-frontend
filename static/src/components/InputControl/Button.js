import { Block } from "../../Block.js";
import { buttonTmplRender } from "./Button.tmpl.js";
export class Span extends Block {
    constructor(props) {
        super("span", props);
    }
    render() {
        return `${this.props.text}`;
    }
}
export class Button extends Block {
    constructor(props) {
        const Span1 = new Span({
            text: 'Button span 1',
        });
        const Span2 = new Span({
            text: 'Button span 2',
        });
        super("button", props, [Span1, Span2]);
        setTimeout(() => {
            Span1 === null || Span1 === void 0 ? void 0 : Span1.setProps({
                text: ' Span1',
            });
        }, 3000);
        setTimeout(() => {
            Span2 === null || Span2 === void 0 ? void 0 : Span2.setProps({
                text: 'Span2',
            });
        }, 4000);
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
