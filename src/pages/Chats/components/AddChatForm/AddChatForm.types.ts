import { IAddChat } from '../../../../core/api/chat.api'

export interface IAddChatForm {
    onAddChat?: (request: IAddChat) => void
}
