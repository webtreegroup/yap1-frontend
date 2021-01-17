import { IChatMessage } from 'core/api'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { ChatMessageForm } from './ChatMessageForm'
import { IChatMessageFormContainer } from './ChatMessageForm.types'

export class ChatMessageFormContainer {
    form: ChatMessageForm

    props: IChatMessageFormContainer

    constructor(props: IChatMessageFormContainer) {
        this.onMessageSend = this.onMessageSend.bind(this)
        this.props = props

        this.form = new ChatMessageForm({
            onMessageSend: this.onMessageSend,
        })
    }

    onMessageSend(request: IChatMessage): void {
        loaderOnAction()

        this.props.sendMessage?.(request.message)
        this.form.element?.reset()

        loaderOffAction()
    }

    createBlock(): ChatMessageForm {
        return this.form
    }
}
