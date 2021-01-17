import { IChatMessage } from 'core/api'

export interface IChatMessageForm {
    onMessageSend?: (request: IChatMessage) => void
}
