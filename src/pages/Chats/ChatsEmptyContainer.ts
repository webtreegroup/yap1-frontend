import { ChatAPI, IChat } from 'core/api'
import { setChatsAction } from 'core/store'
import { checkAuth } from 'utils/auth.utils'
import { ChatsEmpty } from './ChatsEmpty'

export class ChatsEmptyContainer {
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

    createBlock(): ChatsEmpty {
        return new ChatsEmpty({
            onLoadComponent: this.onLoadChats,
        })
    }
}
