import { ComponentProps } from 'core/block/Component.types'

export interface ChatGroupProps extends ComponentProps {
    id?: string
    name?: string
    lastMessage?: string
    time?: string
    unread?: number
    isOwnMessage?: boolean
    isCurrent?: boolean
}