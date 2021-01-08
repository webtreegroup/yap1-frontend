import { IState } from "../../App.types"
import { ICurrentUserInfo } from "../api/auth.api"
import { IChat } from "../api/chat.api"

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
