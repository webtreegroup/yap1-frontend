import { ChatAPI, IChat } from 'core/api'
import { setChatsAction, setCurrentChatAction } from 'core/store'
import { getUrlParam } from 'utils'
import { checkAuth } from 'utils/auth.utils'
import { Chats } from './Chats'

export class ChatsContainer {
    currentChatId: string | null

    constructor() {
        this.currentChatId = getUrlParam('chatId')

        if (!this.currentChatId) return

        setCurrentChatAction(this.currentChatId)
    }

    onLoadChats(): Promise<void> {
        return checkAuth().then(() =>
            ChatAPI.getAll()
                .then((xhr) => {
                    const response: IChat[] = JSON.parse(xhr.response)

                    setChatsAction(response)
                })
                .catch(console.error),
        )
    }

    createBlock(): Chats {
        return new Chats({
            onLoadComponent: this.onLoadChats,
        })
    }
}
