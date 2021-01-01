import { HTTP } from "./Api.js"
import { BaseAPI } from "./base.api.js"

export interface IChat {
    id: number
    title: string
    avatar: string
}

const chatAPIInstance = new HTTP('/chats')

export class ChatAPI extends BaseAPI {
    static create(title: string) {
        return chatAPIInstance.post('/', { data: { title }})
    }

    static request() {
        return chatAPIInstance.get<string>('/')
    }

    static delete(chatId: number) {
        return chatAPIInstance.get('/', { data: { chatId }})
    }
}
