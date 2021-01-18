import { ISocketMessage } from 'core/store'

export interface IChatMessage extends ISocketMessage {
    userName?: string
}
