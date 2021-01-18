import { IComponent } from 'App.types'
import { IChatUser } from 'core/api'
import { ISocketMessage } from 'core/store'

export interface IChatHistory extends IComponent {
    currentChatId?: number
    currentChatUsers?: IChatUser[]
    onLoadUsers?: (currentChatId?: number) => Promise<void> | undefined
    onChatConnect?: (currentChatId?: number) => Promise<void> | undefined
    sendMessage?: (message: string, chatId?: number) => void
    getOldMessage?: (count?: number) => void
    messages?: ISocketMessage[]
    onAddUser?: () => void
}
