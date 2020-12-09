import { IComponent } from "../../../../App.model.js"

export interface IChatGroup extends IComponent {
    name?: string
    lastMessage?: string
    time?: string
    unread?: number
    isOwnMessage?: boolean
    // TODO: необходим для модификатора класса `chats-item_current`, будет задейстован, когда будет реализован роутинг
    isCurrent?: boolean
    img?: string
}
