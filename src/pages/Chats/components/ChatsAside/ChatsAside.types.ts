import { IComponent } from "../../../../App.types.js"
import { IChat } from "../../../../core/api/chat.api.js"

export interface IChatsAside extends IComponent {
    chats: IChat[]
}