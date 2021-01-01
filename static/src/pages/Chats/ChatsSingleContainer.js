import { ChatAPI } from "../../core/api/chat.api.js";
import { getChatsAction } from "../../core/store/actions.js";
import { ChatSingle } from "./ChatsSingle.js";
export class ChatsSingleContainer {
    onLoadChats() {
        return ChatAPI.request().then((xhr) => {
            const response = JSON.parse(xhr.response);
            getChatsAction(response);
        });
    }
    createBlock() {
        return new ChatSingle({
            onLoadChats: this.onLoadChats,
        });
    }
}
