import {
    AuthAPI,
    IChatConnectResponse,
    ICurrentUserInfo,
    MessageChatAPI,
} from 'core/api'
import {
    setConnectedChatsAction,
    store,
} from 'core/store'
import { WebSocketService } from 'core/websocket'
import { ChatHistory } from '.'

export class ChatHistoryContainer {
    chatSocket: WebSocketService | null

    constructor() {
        this.chatSocket = null
    }

    async onChatConnect(currentChatId?: number): Promise<void> {
        try {
            const { connectedChats } = store.value
            const chatsIds = Object.keys(connectedChats)

            if (!currentChatId) return

            const token = await MessageChatAPI.connect(currentChatId).then((xhr) => {
                const response: IChatConnectResponse = JSON.parse(xhr.response)

                return response.token
            })

            const user = await AuthAPI.getCurrentUserInfo().then((xhr) => {
                const response: ICurrentUserInfo = JSON.parse(xhr.response)

                return response
            })

            if (!chatsIds.includes(String(currentChatId))) {
                setConnectedChatsAction({ [currentChatId]: token })
                this.chatSocket = new WebSocketService(
                    user.id,
                    currentChatId,
                    token,
                )
            }
        } catch (err) {
            alert(err)
        }
    }

    sendMessage(message: string): void {
        this.chatSocket?.send(message)
    }

    createBlock(): ChatHistory {
        const ChatHistoryWrapped = new ChatHistory({
            onChatConnect: this.onChatConnect,
            sendMessage: this.sendMessage,
        })

        store.subscribe((state) => {
            // TODO: вместо currentChatId сюда можно передавать список месседжей
            // необходимо для обновления компонента и вызова повторного рендера
            ChatHistoryWrapped.setProps({
                currentChatId: state.currentChatId,
            })
        })

        return ChatHistoryWrapped
    }
}
