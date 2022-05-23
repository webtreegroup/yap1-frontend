import { ComponentProps } from 'core/block/Component.types'
import { IChat } from 'core/api'

export interface IChatsAside extends ComponentProps {
    chats: IChat[]
}
