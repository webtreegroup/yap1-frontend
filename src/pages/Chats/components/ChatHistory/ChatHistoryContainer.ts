import { IChatConnectResponse, MessageChatAPI } from 'core/api'
import { IStoreState, setConnectedChats, store } from 'core/store'
import { WebSocketService } from 'core/websocket'
import { ChatHistory } from '.'

export class ChatHistoryContainer {
    chatSocket: WebSocketService | null

    constructor() {
        this.chatSocket = null
    }

    onChatConnect(storeValue: IStoreState): Promise<string | void> | undefined {
        const { currentChatId, connectedChats } = storeValue

        if (!currentChatId) return

        if (Object.values(connectedChats).includes(String(currentChatId))) {
            return Promise.resolve(connectedChats[currentChatId])
        }

        return MessageChatAPI.connect(currentChatId)
            .then((xhr) => {
                const response: IChatConnectResponse = JSON.parse(xhr.response)

                if (Object.values(storeValue.connectedChats).includes(String(currentChatId))) {
                    return response.token
                }

                return response.token
            }).catch((error) => {
                alert(error)
            })
    }

    createBlock(): ChatHistory {
        const ChatHistoryWrapped = new ChatHistory()

        store.subscribe((state) => {
            this.onChatConnect(state)?.then((token) => {
                if (!state.currentChatId || !token) return

                console.log(token)

                this.chatSocket = new WebSocketService(
                    state.currentUser.id,
                    state.currentChatId,
                    token,
                )
            })

            // TODO: вместо currentChatId сюда можно передавать список месседжей
            // необходимо для обновления компонента и вызова повторного рендера
            ChatHistoryWrapped.setProps({
                currentChatId: state.currentChatId,
            })
        })

        return ChatHistoryWrapped
    }
}
