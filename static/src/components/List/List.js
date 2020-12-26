import { Block } from "../../core/Block.js";
import { Link } from "../Link/Link.js";
export class List extends Block {
    constructor(props) {
        var _a;
        const mappedLinks = (_a = props.list) === null || _a === void 0 ? void 0 : _a.map(el => {
            const link = new Link({
                text: el.title,
                href: el.path
            });
            const result = new Block('li', {}, [link]);
            return result;
        });
        super("ul", props, mappedLinks);
    }
}
