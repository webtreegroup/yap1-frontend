import { Block } from "../../core/Block.js";
import { render } from "../../utils/common.utils.js";
import { MESSAGES } from "./Chats.consts.js";
import { ChatHistory } from "./components/ChatHistory/ChatHistory.js";
import { ChatsAside } from "./components/ChatsAside/ChatsAside.js";
const ChatHistoryComponent = new ChatHistory({ messages: MESSAGES });
const Chats = new Block('div', {
    className: 'chats-page',
}, [new ChatsAside(), ChatHistoryComponent]);
render(".app", Chats);
//# sourceMappingURL=ChatsSingle.js.map