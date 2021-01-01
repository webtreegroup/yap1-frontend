import { Block } from "../../core/Block.js";
import { MESSAGES } from "./Chats.consts.js";
import { ChatHistory } from "./components/ChatHistory/ChatHistory.js";
import { ChatsAside } from "./components/ChatsAside/ChatsAside.js";
export class ChatSingle extends Block {
    constructor() {
        super('main', {
            className: 'chats-page',
        }, {
            root: [new ChatsAside(), new ChatHistory({ messages: MESSAGES })]
        });
    }
}
