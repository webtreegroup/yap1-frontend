import { IComponent } from "../../../../App.model.js"

export interface IChatGroup extends IComponent {
    name?: string
    lastMessage?: string
    time?: string
    unread?: number
    isOwnMessage?: boolean
    isCurrent?: boolean
    img?: string
}
