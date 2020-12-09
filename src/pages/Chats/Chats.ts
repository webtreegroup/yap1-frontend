import { Block } from "../../core/Block.js"
import { render } from "../../utils/common.utils.js"
import { ChatHistory } from "./components/ChatHistory/ChatHistory.js"
import { ChatsAside } from "./components/ChatsAside/ChatsAside.js"

const Chats = new Block(
    'div', 
    {
        className: 'chats-page',
    }, 
    [new ChatsAside(), new ChatHistory()])

render(".app", Chats)