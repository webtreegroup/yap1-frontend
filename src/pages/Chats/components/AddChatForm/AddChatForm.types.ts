import { AddChatContract } from 'core/api'

export interface IAddChatForm {
    onAddChat?: (request: AddChatContract) => void
}
