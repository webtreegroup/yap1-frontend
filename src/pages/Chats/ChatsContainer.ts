import { ChatAPI, IChat } from "../../core/api/chat.api.js"
import { getChatsAction } from "../../core/store/actions.js"
import { Chats } from "./Chats.js"

export class ChatsContainer {
    onLoadChats(){
        ChatAPI.request().then((xhr) => {
            const response: IChat[] = JSON.parse(xhr.response)

            getChatsAction(response)
        })
    }

    createBlock() {
        return new Chats({
            onLoadChats: this.onLoadChats,
        })
    }
}
