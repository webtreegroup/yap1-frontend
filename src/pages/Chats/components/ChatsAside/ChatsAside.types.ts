import { ComponentProps } from 'App.types'
import { IChat } from 'core/api'

export interface IChatsAside extends ComponentProps {
    chats: IChat[]
}
