import { ChatAPI, IChat } from "../../core/api/chat.api"
import { getChatsAction } from "../../core/store/actions"
import { Chats } from "./Chats"

export class ChatsContainer {
    onLoadChats(){
        return ChatAPI.request().then((xhr) => {
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
