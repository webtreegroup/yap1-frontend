import { IComponent } from 'App.types'
import { IChatUser } from 'core/api'
import { ISocketMessage } from 'core/store'

export interface IChatHistory extends IComponent {
    currentChatId?: string
    currentChatUsers?: IChatUser[]
    onLoadUsers?: (currentChatId?: string) => Promise<void> | undefined
    onChatConnect?: (currentChatId?: string) => Promise<void> | undefined
    sendMessage?: (message: string, chatId?: string) => void
    getOldMessage?: (count?: number) => void
    messages?: ISocketMessage[]
    onAddUser?: () => void
}
