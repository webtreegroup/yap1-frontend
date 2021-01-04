import { ChatAPI, IChat } from "../../core/api/chat.api.js"
import { getChatsAction, setCurrentChatAction } from "../../core/store/actions.js"
import { getArrLastEl } from "../../utils/common.utils.js"
import { ChatSingle } from "./ChatsSingle.js"

export class ChatsSingleContainer {
    onLoadChats(){
        const currentChatPaths = window.location.pathname.split('/')
        const currentChatId = getArrLastEl(currentChatPaths)

        if (currentChatId) setCurrentChatAction(Number(currentChatId))

        return ChatAPI.request().then((xhr) => {
            const response: IChat[] = JSON.parse(xhr.response)

            getChatsAction(response)
        })
    }

    createBlock() {
        return new ChatSingle({
            onLoadChats: this.onLoadChats,
        })
    }
}
