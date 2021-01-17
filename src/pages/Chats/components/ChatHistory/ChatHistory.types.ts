import { IComponent } from 'App.types'
import { IChatMessage } from '../ChatMessage/ChatMessage.types'

export interface IChatHistory extends IComponent {
    currentChatId?: number
    onChatConnect?: () => Promise<void> | undefined
    sendMessage?: (message: string) => void
    messages?: IChatMessage[]
    onAddUser?: () => void
}
