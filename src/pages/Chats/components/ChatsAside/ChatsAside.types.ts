import { IComponent } from "../../../../App.types"
import { IChat } from "../../../../core/api/chat.api"

export interface IChatsAside extends IComponent {
    chats: IChat[]
}