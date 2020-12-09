import { Block } from "../../../../core/Block.js";
import { chatMessageTmplRender } from "./index.js";
export class ChatMessage extends Block {
    constructor(props) {
        super('article', props);
    }
    createResources() {
        var _a;
        const classes = [
            'chat-history-item',
            this.props.isOwn
                ? 'chat-history-item_own'
                : undefined
        ].filter(Boolean);
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add(...classes);
    }
    render() {
        return chatMessageTmplRender(this.props);
    }
}
