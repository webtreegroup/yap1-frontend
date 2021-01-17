import { IChatMessage } from 'core/api'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { ChatMessageForm } from './ChatMessageForm'

export class ChatMessageFormContainer {
    form: ChatMessageForm

    constructor() {
        this.onMessageSend = this.onMessageSend.bind(this)

        this.form = new ChatMessageForm({
            onMessageSend: this.onMessageSend,
        })
    }

    onMessageSend(request: IChatMessage): void {
        loaderOnAction()

        // TODO: тут будем юзать WebSocket
        console.log(request)
        this.form.element?.reset()

        loaderOffAction()
    }

    createBlock(): ChatMessageForm {
        return this.form
    }
}
