import { IComponent } from 'App.types'
import { IChatMessage } from '../ChatMessage/ChatMessage.types'

export interface IChatHistory extends IComponent {
    currentChatId?: number
    onChatConnect?: (currentChatId?: number) => Promise<void> | undefined
    sendMessage?: (message: string) => void
    getOldMessage?: (count?: number) => void
    messages?: IChatMessage[]
    onAddUser?: () => void
}
