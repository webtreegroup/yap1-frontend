import { IComponent } from "../../../../App.types.js"


export interface IChatGroup extends IComponent {
    id?: number
    name?: string
    lastMessage?: string
    time?: string
    unread?: number
    isOwnMessage?: boolean
    isCurrent?: boolean
    img?: string
}
