import { Block } from "../../Block.js";
import { buttonTmplRender } from "./Button.tmpl.js";
export class Button extends Block {
    constructor(props) {
        super("button", props);
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
//# sourceMappingURL=Button.js.map