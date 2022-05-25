import { ComponentProps } from 'core/block/Component.types'

export interface ChatHistoryProps extends ComponentProps {
    onLoadUsers?: (currentChatId?: string) => Promise<void> | undefined
    onChatConnect?: (currentChatId?: string) => Promise<void> | undefined
    sendMessage?: (message: string, chatId?: string) => void
    getOldMessage?: (count?: number) => void
    onAddUser?: () => void
}
