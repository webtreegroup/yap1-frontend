export function escapeHtml(value) {
    if (typeof value !== 'string')
        return value;
    const entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };
    return value.replace(/[&<>"'`=\/]/g, function (char) {
        return entityMap[char];
    });
}
export function getArrLastEl(arr) {
    return arr[arr.length - 1];
}
export function render(query, block) {
    const appendBlock = block.content;
    if (!appendBlock)
        return;
    if (typeof query === 'string') {
        const root = document.querySelector(query);
        return root === null || root === void 0 ? void 0 : root.appendChild(appendBlock);
    }
    return query === null || query === void 0 ? void 0 : query.appendChild(appendBlock);
}
export function classNames(classes) {
    return classes.filter(Boolean);
}
export function isEqual(firstArg, secondArg) {
    if (firstArg === null
        || firstArg === undefined
        || secondArg === null
        || secondArg === undefined)
        return firstArg === secondArg;
    if (firstArg.constructor !== secondArg.constructor)
        return false;
    if (firstArg instanceof Function)
        return firstArg === secondArg;
    if (firstArg instanceof RegExp)
        return firstArg === secondArg;
    if (firstArg === secondArg
        || firstArg.valueOf() === secondArg.valueOf())
        return true;
    if (Array.isArray(firstArg)
        && firstArg.length !== secondArg.length)
        return false;
    if (firstArg instanceof Date)
        return false;
    if (!(firstArg instanceof Object))
        return false;
    if (!(secondArg instanceof Object))
        return false;
    const firstObjectKeys = Object.keys(firstArg);
    const secondObjectKeys = Object.keys(secondArg);
    return secondObjectKeys.every(function (i) { return firstObjectKeys.indexOf(i) !== -1; }) &&
        firstObjectKeys.every(function (i) {
            const firstSubObject = firstArg;
            const secondSubObject = secondArg;
            return isEqual(firstSubObject[i], secondSubObject[i]);
        });
}
