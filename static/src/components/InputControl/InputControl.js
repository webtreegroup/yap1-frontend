import { Block } from "../../core/Block.js";
import { inputControlTmplRender } from "./InputControl.tmpl.js";
export class InputControl extends Block {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f;
        super("div", props);
        this.handleControlChangeOrFocus = this.handleControlChangeOrFocus.bind(this);
        this.handleControlBlur = this.handleControlBlur.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
        (_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector('input')) === null || _b === void 0 ? void 0 : _b.addEventListener('focus', this.handleControlChangeOrFocus);
        (_d = (_c = this._element) === null || _c === void 0 ? void 0 : _c.querySelector('input')) === null || _d === void 0 ? void 0 : _d.addEventListener('input', this.handleControlChangeOrFocus);
        (_f = (_e = this._element) === null || _e === void 0 ? void 0 : _e.querySelector('input')) === null || _f === void 0 ? void 0 : _f.addEventListener('blur', this.handleControlBlur);
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
        var _a, _b, _c;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('input-control');
        if (isTouched)
            (_c = (_b = this._element) === null || _b === void 0 ? void 0 : _b.querySelector('input')) === null || _c === void 0 ? void 0 : _c.classList.add('touched');
    }
    render() {
        return inputControlTmplRender(this.props);
    }
}
