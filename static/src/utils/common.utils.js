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
export function isEqual(firstObject, secondObject) {
    if (firstObject === null
        || firstObject === undefined
        || secondObject === null
        || secondObject === undefined)
        return firstObject === secondObject;
    if (firstObject.constructor !== secondObject.constructor)
        return false;
    if (firstObject instanceof Function)
        return firstObject === secondObject;
    if (firstObject instanceof RegExp)
        return firstObject === secondObject;
    if (firstObject === secondObject
        || firstObject.valueOf() === secondObject.valueOf())
        return true;
    if (Array.isArray(firstObject)
        && firstObject.length !== secondObject.length)
        return false;
    if (firstObject instanceof Date)
        return false;
    if (!(firstObject instanceof Object))
        return false;
    if (!(secondObject instanceof Object))
        return false;
    const firstObjectKeys = Object.keys(firstObject);
    const secondObjectKeys = Object.keys(secondObject);
    return secondObjectKeys.every(function (i) { return firstObjectKeys.indexOf(i) !== -1; }) &&
        firstObjectKeys.every(function (i) {
            const firstSubObject = firstObject;
            const secondSubObject = secondObject;
            return isEqual(firstSubObject[i], secondSubObject[i]);
        });
}
