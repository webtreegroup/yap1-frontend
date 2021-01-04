import { Block } from "../../core/block/Block.js";
import { inputControlTmplRender } from "./InputControl.tmpl.js";
export class InputControl extends Block {
    constructor(props) {
        var _a, _b, _c, _d;
        super("div", props);
        this.handleControlChangeOrFocus = this.handleControlChangeOrFocus.bind(this);
        this.handleControlBlur = this.handleControlBlur.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
        this._inputElement = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector('input');
        (_b = this._inputElement) === null || _b === void 0 ? void 0 : _b.addEventListener('focus', this.handleControlChangeOrFocus);
        (_c = this._inputElement) === null || _c === void 0 ? void 0 : _c.addEventListener('input', this.handleControlChangeOrFocus);
        (_d = this._inputElement) === null || _d === void 0 ? void 0 : _d.addEventListener('blur', this.handleControlBlur);
    }
    handleValidate(elem, value) {
        if (!this.props.validationFn)
            return;
        const validationResults = this.props.validationFn.map((fn) => fn(value));
        if (validationResults.some(result => result === false))
            elem.classList.add('error');
        else
            elem.classList.remove('error');
    }
    handleControlBlur(e) {
        const elem = e.target;
        const currentValue = elem === null || elem === void 0 ? void 0 : elem.value;
        this.handleValidate(elem, currentValue);
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
        this.handleValidate(elem, currentValue);
    }
    createResources({ isTouched }) {
        var _a, _b;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('input-control');
        if (isTouched)
            (_b = this._inputElement) === null || _b === void 0 ? void 0 : _b.classList.add('touched');
    }
    render() {
        return inputControlTmplRender(this.props);
    }
}
//# sourceMappingURL=InputControl.js.map