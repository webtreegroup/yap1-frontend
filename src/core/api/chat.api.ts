import { HTTP } from "./api"
import { BaseAPI } from "./base.api"

export interface IChat {
    id: number
    title: string
    avatar: string
}

export interface IAddChat {
    title: string
}

const chatAPIInstance = new HTTP('/chats')

export class ChatAPI extends BaseAPI {
    static create(data: IAddChat) {
        return chatAPIInstance.post('/', { data })
    }

    static request() {
        return chatAPIInstance.get<string>('/')
    }

    static delete(chatId: number) {
        return chatAPIInstance.get('/', { data: { chatId }})
    }
}
