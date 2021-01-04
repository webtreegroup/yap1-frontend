import { ChatAPI } from "../../core/api/chat.api.js";
import { getChatsAction } from "../../core/store/actions.js";
import { Chats } from "./Chats.js";
export class ChatsContainer {
    onLoadChats() {
        return ChatAPI.request().then((xhr) => {
            const response = JSON.parse(xhr.response);
            getChatsAction(response);
        });
    }
    createBlock() {
        return new Chats({
            onLoadChats: this.onLoadChats,
        });
    }
}
//# sourceMappingURL=ChatsContainer.js.map