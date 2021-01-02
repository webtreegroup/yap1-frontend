import { IState } from "../../App.types.js"
import { ICurrentUserInfo } from "../api/auth.api.js"
import { IChat } from "../api/chat.api.js"

export interface IStoreState extends IState {
    loader: {
        active: boolean
    }
    currentUser: ICurrentUserInfo
    chats: IChat[],
    currentChatId?: number
}

export const INITIAL_STATE = { 
    loader: {
        active: false
    },
    currentUser: {} as ICurrentUserInfo,
    chats: []
}
