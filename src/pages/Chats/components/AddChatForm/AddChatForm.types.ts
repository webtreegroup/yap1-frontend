import { IAddChat } from "../../../../core/api/chat.api.js"

export interface IAddChatForm {
    onAddChat?: (request: IAddChat) => void
}