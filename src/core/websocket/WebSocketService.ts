import { API_HOST } from 'core/api'
import { addMessageAction, addOldMessagesAction, ISocketOldMessage } from 'core/store'

export class WebSocketService {
    socket: WebSocket

    constructor(userId: number, chatId: number, token: string) {
        this.socket = new WebSocket(`wss://${API_HOST}/ws/chats/${userId}/${chatId}/${token}`)

        this.socket.addEventListener('open', () => {
            this.getOld(0)
            this.ping()
        })

        this.socket.addEventListener('close', (event) => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто')
            } else {
                console.log('Обрыв соединения')
            }

            console.log(`Код: ${event.code}`)
        })

        this.socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data)

            if (event.type !== 'message') return

            if (Array.isArray(data)) {
                const payload = data.map((el: ISocketOldMessage) => ({
                    chatId: el.chat_id,
                    userId: el.user_id,
                    content: el.content,
                    time: el.time,
                }))

                addOldMessagesAction(payload)

                return
            }

            if (data.type !== 'message') return

            addMessageAction({
                chatId,
                userId: data.userId,
                content: data.content,
                time: data.time,
            })
        })

        this.socket.addEventListener('error', (event) => {
            console.log('Ошибка', event)
        })
    }

    send(message: string): void {
        this.socket.send(JSON.stringify({
            content: message,
            type: 'message',
        }))
    }

    getOld(count: number): void {
        return this.socket.send(JSON.stringify({
            content: count,
            type: 'get old',
        }))
    }

    ping(): void {
        setInterval(() => {
            this.socket.send('__ping__')
        }, 5000)
    }
}
