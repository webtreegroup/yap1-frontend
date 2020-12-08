export class Templator {
    constructor(template) {
        this._template = template;
    }
    get(obj, path, defaultValue) {
        return path.split('.').reduce((acc, curr) => acc && typeof acc === 'object' ? acc[curr] : defaultValue, obj);
    }
    compile(ctx) {
        return this._template.replace(/\{\{(.+?)\}\}/ig, (_match, ...group) => {
            const result = this.get(ctx, group[0].trim());
            if (typeof result === 'object') {
                console.log('it is object');
            }
            if (typeof result === 'function') {
                window[group[0]] = result;
                return `window.${group[0].trim()}()`;
            }
            return result ? String(result) : '';
        });
    }
}
//# sourceMappingURL=Templator.js.map