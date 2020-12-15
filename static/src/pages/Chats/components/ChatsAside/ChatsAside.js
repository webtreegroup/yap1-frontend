import { Block } from "../../../../core/Block.js";
import { ChatGroup } from "../ChatGroup/ChatGroup.js";
import { CHATS } from "./ChatsAside.consts.js";
import { chatsAsideTmplRender } from "./ChatsAside.tmpl.js";
export class ChatsAside extends Block {
    constructor(props) {
        const chats = CHATS.map(el => new ChatGroup(el));
        super('aside', props, chats);
    }
    createResources() {
        var _a;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('chats');
    }
    render() {
        return chatsAsideTmplRender();
    }
}
