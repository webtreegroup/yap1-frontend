import { Block } from "../../../../core/Block.js";
import { classNames } from "../../../../utils/common.utils.js";
import { chatMessageTmplRender } from "./ChatMessage.tmpl.js";
export class ChatMessage extends Block {
    constructor(props) {
        super('article', props);
    }
    createResources() {
        var _a;
        const classes = classNames([
            'chat-history-item',
            this.props.isOwn
                ? 'chat-history-item_own'
                : undefined
        ]);
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add(...classes);
    }
    render() {
        return chatMessageTmplRender(this.props);
    }
}
//# sourceMappingURL=ChatMessage.js.map