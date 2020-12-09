import { Block } from "../../core/Block.js";
export class Form extends Block {
    constructor(props, children) {
        var _a;
        super("form", props, children);
        this.handleSubmit = this.handleSubmit.bind(this);
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleSubmit);
    }
    handleSubmit(e) {
        var _a;
        e.preventDefault();
        const requestForConsole = {};
        const fieldsWithErrors = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelectorAll('input.error');
        if (fieldsWithErrors === null || fieldsWithErrors === void 0 ? void 0 : fieldsWithErrors.length) {
            alert('Поля заполнены не правильно, проверьте форму еще раз...');
            return;
        }
        const formData = new FormData(this._element);
        for (const [key, value] of formData.entries()) {
            requestForConsole[key] = value;
        }
        console.log(requestForConsole);
    }
}
