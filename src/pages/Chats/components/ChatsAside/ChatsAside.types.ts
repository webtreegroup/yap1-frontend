import { IComponent } from 'App.types'
import { IChat } from 'core/api'

export interface IChatsAside extends IComponent {
    chats: IChat[]
}
