import { ChatAPI, ChatUsersContract, UserContract, UsersAPI } from 'core/api'
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
                    const response: UserContract = JSON.parse(xhr.response)

                    return response
                })

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
            const response: ChatUsersContract = JSON.parse(xhr.response)

            setCurrentChatUsers(response.users)
        })
    }

    sendMessage(message: string, chatId?: string): void {
        if (!chatId) return

        store.value.connectedChats[chatId].send(message)
    }

    createBlock(): ChatHistory {
        return new ChatHistory({
            onChatConnect: this.onChatConnect,
            sendMessage: this.sendMessage,
            onLoadUsers: this.onLoadUsers,
        })
    }
}
