import { IAddChat } from 'core/api'

export interface IAddChatForm {
    onAddChat?: (request: IAddChat) => void
}
