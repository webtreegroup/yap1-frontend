import { API_HOST } from 'core/api'
import { setMessagesAction } from 'core/store'

export class WebSocketService {
    socket: WebSocket

    constructor(userId: number, chatId: number, token: string) {
        this.socket = new WebSocket(`wss://${API_HOST}/ws/chats/${userId}/${chatId}/${token}`)

        this.socket.addEventListener('open', () => {
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

            if (data.type !== 'message') return

            setMessagesAction({
                chatId,
                userId: data.userId,
                content: data.content,
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

    ping(): void {
        setInterval(() => {
            this.socket.send('__ping__')
        }, 5000)
    }
}
