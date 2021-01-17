import { IChatMessage } from 'core/api'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { ChatMessageForm } from './ChatMessageForm'

export class ChatMessageFormContainer {
    constructor() {
        this.onMessageSend = this.onMessageSend.bind(this)
    }

    onMessageSend(request: IChatMessage): void {
        loaderOnAction()

        // TODO: тут будем юзать WebSocket
        console.log(request)

        loaderOffAction()
    }

    createBlock(): ChatMessageForm {
        return new ChatMessageForm({
            onMessageSend: this.onMessageSend,
        })
    }
}
