export function checkLoginLength(value) {
    if (!value)
        return false;
    const regexp = new RegExp(/^[a-zA-Z]{3,}$/);
    return regexp.test(value);
}
//# sourceMappingURL=form.utils.js.map