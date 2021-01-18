import { ChatAPI, IChat } from 'core/api'
import { setChatsAction, setCurrentChatAction } from 'core/store'
import { getArrLastEl } from 'utils'
import { Chats } from './Chats'

export class ChatsContainer {
    currentChatId: number

    constructor() {
        const currentChatPaths = window.location.pathname.split('/')
        this.currentChatId = +getArrLastEl(currentChatPaths)

        if (Number.isNaN(this.currentChatId)) return

        setCurrentChatAction(this.currentChatId)
    }

    onLoadChats(): Promise<void> {
        return ChatAPI.request().then((xhr) => {
            const response: IChat[] = JSON.parse(xhr.response)

            setChatsAction(response)
        })
    }

    createBlock(): Chats {
        return new Chats({
            onLoadChats: this.onLoadChats,
        })
    }
}
