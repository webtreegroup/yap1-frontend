import { Block } from "../../core/Block.js";
import { render } from "../../utils/common.utils.js";
import { MESSAGES } from "./Chats.consts.js";
import { ChatHistory } from "./components/ChatHistory/ChatHistory.js";
import { ChatsAside } from "./components/ChatsAside/ChatsAside.js";
const ChatsAsideComponent = new ChatsAside();
// TODO: добавить прорбос свойст в дочерние компоненты
const ChatHistoryComponent = new ChatHistory({ messages: MESSAGES });
// TODO: компонент-заглушка, когда будет настроен роутинг, этот компонент не понадобится
const Chats = new Block('div', {
    className: 'chats-page',
}, [ChatsAsideComponent, ChatHistoryComponent]);
render(".app", Chats);
