import { ChatAPI, IChat } from 'core/api'
import { setChatsAction, setCurrentChatAction } from 'core/store'
import { getArrLastEl } from 'utils'
import { checkAuth } from 'utils/auth.utils'
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
        return checkAuth().then(() =>
            ChatAPI.request()
                .then((xhr) => {
                    const response: IChat[] = JSON.parse(xhr.response)

                    setChatsAction(response)
                })
                .catch((err) => {
                    alert(err)
                }),
        )
    }

    createBlock(): Chats {
        return new Chats({
            onLoadComponent: this.onLoadChats,
        })
    }
}
