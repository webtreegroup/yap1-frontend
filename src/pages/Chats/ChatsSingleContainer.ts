import { ChatAPI, IChat } from 'core/api'
import { getChatsAction, setCurrentChatAction } from 'core/store'
import { getArrLastEl } from 'shared/utils'
import { ChatSingle } from './ChatsSingle'

export class ChatsSingleContainer {
    onLoadChats(): Promise<void> {
        const currentChatPaths = window.location.pathname.split('/')
        const currentChatId = getArrLastEl(currentChatPaths)

        if (currentChatId) setCurrentChatAction(Number(currentChatId))

        return ChatAPI.request().then((xhr) => {
            const response: IChat[] = JSON.parse(xhr.response)

            getChatsAction(response)
        })
    }

    createBlock(): ChatSingle {
        return new ChatSingle({
            onLoadChats: this.onLoadChats,
        })
    }
}
