import { ChatAPI, IChat } from 'core/api'
import { setChatsAction } from 'core/store'
import { Chats } from './Chats'

export class ChatsContainer {
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
