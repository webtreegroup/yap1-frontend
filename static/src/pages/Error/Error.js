import { Link } from "../../components/Link/Link.js";
import { Block } from "../../core/Block.js";
import { errorTmplRender } from "./Error.tmpl.js";
export class Error extends Block {
    constructor() {
        const link = new Link({
            text: 'Назад к чатам',
            href: '/'
        });
        super('main', { className: 'error-page' }, [link], errorTmplRender);
    }
}
