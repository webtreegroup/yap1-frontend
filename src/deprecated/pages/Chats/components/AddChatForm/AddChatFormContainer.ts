import {
    CHAT_ADD_FAIL_MESSAGE,
    CHAT_ADD_SUCCESS_MESSAGE,
    ChatAPI,
    ChatFormContract,
} from 'core/api'
import { Router } from 'core/router'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { AddChatForm } from './AddChatForm'

export class AddChatFormContainer {
    constructor() {
        this.onAddChat = this.onAddChat.bind(this)
    }

    onAddChat(request: ChatFormContract): void {
        loaderOnAction()

        ChatAPI.create(request)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        alert(CHAT_ADD_SUCCESS_MESSAGE)
                        Router.reload()
                        break
                    default:
                        alert(CHAT_ADD_FAIL_MESSAGE)
                }
            })
            .finally(() => {
                loaderOffAction()
            })
    }

    createBlock(): AddChatForm {
        return new AddChatForm({
            onAddChat: this.onAddChat,
        })
    }
}
