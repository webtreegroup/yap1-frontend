import { ChatFormContract } from 'core/api'

export interface IAddChatForm {
    onAddChat?: (request: ChatFormContract) => void
}
