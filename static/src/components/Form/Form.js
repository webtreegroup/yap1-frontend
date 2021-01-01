import { Block } from "../../core/Block.js";
export class Form extends Block {
    constructor(props, children, baseTmplRender) {
        var _a;
        super("form", props, children, baseTmplRender);
        this._onSubmit = this._onSubmit.bind(this);
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this._onSubmit);
    }
    onSubmit(request, formData) {
        console.log(request, formData);
    }
    _onSubmit(e) {
        var _a;
        e.preventDefault();
        const request = {};
        const fieldsWithErrors = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelectorAll('input.error');
        if (fieldsWithErrors === null || fieldsWithErrors === void 0 ? void 0 : fieldsWithErrors.length) {
            alert('Поля заполнены не правильно, проверьте форму еще раз...');
            return;
        }
        const formData = new FormData(this._element);
        for (const [key, value] of formData.entries()) {
            request[key] = value;
        }
        this.onSubmit(request, formData);
    }
}
