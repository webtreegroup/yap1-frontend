import { ComponentProps } from 'App.types'
import { UserContract } from 'core/api'
import { ISocketMessage } from 'core/store'

export interface IChatHistory extends ComponentProps {
    currentChatId?: string
    currentChatUsers?: UserContract[]
    onLoadUsers?: (currentChatId?: string) => Promise<void> | undefined
    onChatConnect?: (currentChatId?: string) => Promise<void> | undefined
    sendMessage?: (message: string, chatId?: string) => void
    getOldMessage?: (count?: number) => void
    messages?: ISocketMessage[]
    onAddUser?: () => void
}
