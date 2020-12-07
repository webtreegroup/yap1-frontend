"use strict";
const controls = document.querySelectorAll('.input-control input');
function handleControlChangeOrFocus(e) {
    const elem = e.target;
    const currentValue = elem === null || elem === void 0 ? void 0 : elem.value;
    if (currentValue) {
        elem.classList.add('touched');
    }
    else {
        elem.classList.remove('touched');
    }
}
controls.forEach(element => {
    element.addEventListener('focus', handleControlChangeOrFocus);
    element.addEventListener('input', handleControlChangeOrFocus);
});
//# sourceMappingURL=InputControl.js.map