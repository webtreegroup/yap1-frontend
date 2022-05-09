import { IComponent } from 'App.types'

export interface IChatGroup extends IComponent {
    id?: string
    name?: string
    lastMessage?: string
    time?: string
    unread?: number
    isOwnMessage?: boolean
    isCurrent?: boolean
    img?: string
}
