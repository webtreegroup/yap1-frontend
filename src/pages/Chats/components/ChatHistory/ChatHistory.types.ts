import { IComponent } from 'App.types'
import { ISocketMessage } from 'core/store'

export interface IChatHistory extends IComponent {
    currentChatId?: number
    onChatConnect?: (currentChatId?: number) => Promise<void> | undefined
    sendMessage?: (message: string, chatId?: number) => void
    getOldMessage?: (count?: number) => void
    messages?: ISocketMessage[]
    onAddUser?: () => void
}
