import { ChatAPI, IChat } from '../../core/api/chat.api'
import { getChatsAction, setCurrentChatAction } from '../../core/store/actions'
import { getArrLastEl } from '../../utils/common.utils'
import { ChatSingle } from './ChatsSingle'

export class ChatsSingleContainer {
    onLoadChats() {
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
