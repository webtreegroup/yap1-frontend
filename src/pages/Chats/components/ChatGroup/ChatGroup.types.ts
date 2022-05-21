import { ComponentProps } from 'App.types'

export interface IChatGroup extends ComponentProps {
    id?: string
    name?: string
    lastMessage?: string
    time?: string
    unread?: number
    isOwnMessage?: boolean
    isCurrent?: boolean
    img?: string
}
