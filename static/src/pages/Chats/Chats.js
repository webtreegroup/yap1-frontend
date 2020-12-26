import { Block } from "../../core/Block.js";
import { ChatHistory } from "./components/ChatHistory/ChatHistory.js";
import { ChatsAside } from "./components/ChatsAside/ChatsAside.js";
export class Chats extends Block {
    constructor() {
        super('main', {
            className: 'chats-page',
        }, [new ChatsAside(), new ChatHistory()]);
    }
}
