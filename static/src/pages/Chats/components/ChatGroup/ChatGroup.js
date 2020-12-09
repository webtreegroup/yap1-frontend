import { Block } from "../../../../core/Block.js";
import { chatGroupTmplRender } from "./index.js";
export class ChatGroup extends Block {
    constructor(props) {
        super('div', props);
    }
    createResources() {
        var _a;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('chats-item');
    }
    render() {
        return chatGroupTmplRender(this.props);
    }
}
