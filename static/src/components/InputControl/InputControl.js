import { Block } from "../../core/Block.js";
import { inputControlTmplRender } from "./InputControl.tmpl.js";
export class InputControl extends Block {
    constructor(props) {
        var _a, _b;
        super("div", props);
        this.handleControlChangeOrFocus = this.handleControlChangeOrFocus.bind(this);
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.addEventListener('focus', this.handleControlChangeOrFocus);
        (_b = this._element) === null || _b === void 0 ? void 0 : _b.addEventListener('input', this.handleControlChangeOrFocus);
    }
    handleControlChangeOrFocus(e) {
        const elem = e.target;
        const currentValue = elem === null || elem === void 0 ? void 0 : elem.value;
        if (currentValue) {
            elem.classList.add('touched');
        }
        else {
            elem.classList.remove('touched');
        }
    }
    createResources({ isTouched }) {
        var _a, _b, _c;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('input-control');
        if (isTouched)
            (_c = (_b = this._element) === null || _b === void 0 ? void 0 : _b.querySelector('input')) === null || _c === void 0 ? void 0 : _c.classList.add('touched');
    }
    render() {
        return inputControlTmplRender(this.props);
    }
}
//# sourceMappingURL=InputControl.js.map