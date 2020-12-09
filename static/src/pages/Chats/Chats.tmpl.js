import { Block } from "../../core/Block.js";
import { render } from "../../utils/common.utils.js";
import { ChatHistory, ChatsAside } from "./components/index.js";
const ChatsAsideComponent = new ChatsAside();
const ChatHistoryComponent = new ChatHistory();
const Chats = new Block('div', {
    className: 'chats-page'
}, [ChatsAsideComponent, ChatHistoryComponent]);
render(".app", Chats);
