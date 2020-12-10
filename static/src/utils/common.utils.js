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
//# sourceMappingURL=common.utils.js.map