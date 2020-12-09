import { Block } from "../../../../core/Block.js";
import { ChatMessage } from "../ChatMessage/ChatMessage.js";
import { chatHistoryTmplRender } from "./ChatHistory.tmpl.js";
export class ChatHistory extends Block {
    constructor(props) {
        var _a;
        const messages = (_a = props === null || props === void 0 ? void 0 : props.messages) === null || _a === void 0 ? void 0 : _a.map(el => new ChatMessage(el));
        super('main', props, messages);
    }
    createResources() {
        var _a;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('chat-history', 'chat-history_not-selected');
    }
    render() {
        return chatHistoryTmplRender(this.props);
    }
}
