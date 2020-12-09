import { Block } from "../../../../core/Block.js";
import { classNames } from "../../../../utils/common.utils.js";
import { chatGroupTmplRender } from "./ChatGroup.tmpl.js";
export class ChatGroup extends Block {
    constructor(props) {
        super('div', props);
    }
    createResources({ isCurrent }) {
        var _a;
        const classes = classNames([
            'chats-item',
            isCurrent ? 'chats-item_current' : undefined
        ]);
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add(...classes);
    }
    render() {
        return chatGroupTmplRender(this.props);
    }
}
//# sourceMappingURL=ChatGroup.js.map