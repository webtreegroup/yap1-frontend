import {
    ChatAPI,
    IChatUser,
    ICurrentUserInfo,
    MessageChatAPI,
    UsersAPI,
} from 'core/api'
import { setConnectedChatsAction, setCurrentChatUsers, store } from 'core/store'
import { WebSocketService } from 'core/websocket'
import { ChatHistory } from '.'

export class ChatHistoryContainer {
    chatSocket: WebSocketService | null

    constructor() {
        this.chatSocket = null
    }

    async onChatConnect(currentChatId?: string): Promise<void> {
        try {
            const { connectedChats } = store.value
            const chatsIds = Object.keys(connectedChats)

            if (!currentChatId) return

            if (!chatsIds.includes(String(currentChatId))) {
                const user = await UsersAPI.getCurrentUser().then((xhr) => {
                    const response: ICurrentUserInfo = JSON.parse(xhr.response)

                    return response
                })

                const response = await MessageChatAPI.connect(
                    user.id,
                    currentChatId,
                )

                console.log('Connect to chat response - ', response)

                this.chatSocket = new WebSocketService(user.id, currentChatId)

                setConnectedChatsAction({ [currentChatId]: this.chatSocket })
            } else {
                this.chatSocket = connectedChats[currentChatId]
            }
        } catch (err) {
            alert(err)
        }
    }

    onLoadUsers(currentChatId?: string): Promise<void> | undefined {
        if (!currentChatId) return

        return ChatAPI.getChatUsers(currentChatId).then((xhr) => {
            const response: IChatUser[] = JSON.parse(xhr.response)

            setCurrentChatUsers(response)
        })
    }

    sendMessage(message: string, chatId?: string): void {
        if (!chatId) return

        store.value.connectedChats[chatId].send(message)
    }

    createBlock(): ChatHistory {
        const ChatHistoryWrapped = new ChatHistory({
            onChatConnect: this.onChatConnect,
            sendMessage: this.sendMessage,
            onLoadUsers: this.onLoadUsers,
        })

        store.subscribe(
            (state) => {
                ChatHistoryWrapped.setProps({
                    currentChatId: state.currentChatId,
                    messages: state.messages.filter(
                        (el) => el.chatId === state.currentChatId,
                    ),
                    currentChatUsers: state.currentChatUsers,
                })
            },
            ['currentChatId', 'messages', 'currentChatUsers'],
        )

        return ChatHistoryWrapped
    }
}
