import { Block } from "../../core/Block.js";
import { loaderTmplRender } from "./Loader.tmpl.js";
export class Loader extends Block {
    constructor(props) {
        super("div", Object.assign(Object.assign({}, props), { className: 'loader' }));
    }
    render() {
        return loaderTmplRender(this.props);
    }
}
