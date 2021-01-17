import {
    ChatAPI,
    IChat,
} from 'core/api'
import { setChatsAction, setCurrentChatAction } from 'core/store'
import { getArrLastEl } from 'utils'
import { ChatSingle } from './ChatsSingle'

export class ChatsSingleContainer {
    currentChatId: number

    constructor() {
        const currentChatPaths = window.location.pathname.split('/')
        this.currentChatId = +getArrLastEl(currentChatPaths)

        setCurrentChatAction(this.currentChatId)
    }

    async onLoadChats(): Promise<void> {
        return ChatAPI.request().then((xhr) => {
            const response: IChat[] = JSON.parse(xhr.response)

            setChatsAction(response)
        })
    }

    createBlock(): ChatSingle {
        return new ChatSingle({
            onLoadChats: this.onLoadChats,
        })
    }
}
