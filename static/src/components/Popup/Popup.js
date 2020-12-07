export class Popups {
    constructor(elemId) {
        var _a, _b;
        this._elem = null;
        this._elem = document.getElementById(elemId);
        (_b = (_a = this._elem) === null || _a === void 0 ? void 0 : _a.querySelector('.popup__close')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            this.hide();
        });
    }
    show() {
        var _a;
        (_a = this._elem) === null || _a === void 0 ? void 0 : _a.classList.add('popup-wrap_active');
    }
    hide() {
        var _a;
        (_a = this._elem) === null || _a === void 0 ? void 0 : _a.classList.remove('popup-wrap_active');
    }
    toggle() {
        var _a;
        (_a = this._elem) === null || _a === void 0 ? void 0 : _a.classList.toggle('popup-wrap_active');
    }
}
//# sourceMappingURL=Popup.js.map