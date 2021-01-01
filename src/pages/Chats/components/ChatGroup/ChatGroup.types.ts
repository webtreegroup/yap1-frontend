import { IComponent } from "../../../../App.types.js"

// TODO: контракт под вопросом, т.к. в АПИ данные отличаются
export interface IChatGroup extends IComponent {
    name?: string
    lastMessage?: string
    time?: string
    unread?: number
    isOwnMessage?: boolean
    isCurrent?: boolean
    img?: string
}
