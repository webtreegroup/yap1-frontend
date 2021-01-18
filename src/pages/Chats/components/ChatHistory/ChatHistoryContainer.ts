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
import { IChatHistory } from './ChatHistory.types'

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
                this.chatSocket = new WebSocketService(
                    user.id,
                    currentChatId,
                    token,
                )
                setConnectedChatsAction({ [currentChatId]: this.chatSocket })
            } else {
                this.chatSocket = connectedChats[currentChatId]
            }
        } catch (err) {
            alert(err)
        }
    }

    sendMessage(message: string, chatId?: number): void {
        if (!chatId) return

        store.value.connectedChats[chatId].send(message)
    }

    createBlock(props?: IChatHistory): ChatHistory {
        const ChatHistoryWrapped = new ChatHistory({
            onChatConnect: this.onChatConnect,
            sendMessage: this.sendMessage,
            currentChatId: props?.currentChatId,
        })

        store.subscribe((state) => {
            ChatHistoryWrapped.setProps({
                currentChatId: state.currentChatId,
                messages: state.messages.filter(((el) => el.chatId === state.currentChatId)),
            })
        })

        return ChatHistoryWrapped
    }
}
