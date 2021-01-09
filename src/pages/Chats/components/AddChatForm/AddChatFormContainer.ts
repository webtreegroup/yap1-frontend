import { CHAT_ADD_FAIL_MESSAGE, CHAT_ADD_SUCCESS_MESSAGE } from '../../../../core/api/api.consts'
import { ChatAPI, IAddChat } from '../../../../core/api/chat.api'
import { Router } from '../../../../core/router/Router'
import { loaderOffAction, loaderOnAction } from '../../../../core/store/actions'
import { AddChatForm } from './AddChatForm'

export class AddChatFormContainer {
    constructor() {
        this.onAddChat = this.onAddChat.bind(this)
    }

    onAddChat(request: IAddChat) {
        loaderOnAction()

        ChatAPI.create(request).then((response) => {
            switch (response.status) {
            case 200:
                alert(CHAT_ADD_SUCCESS_MESSAGE)
                Router.reload()
                break
            default:
                alert(CHAT_ADD_FAIL_MESSAGE)
            }
        }).finally(() => {
            loaderOffAction()
        })
    }

    createBlock() {
        return new AddChatForm({
            onAddChat: this.onAddChat,
        })
    }
}
