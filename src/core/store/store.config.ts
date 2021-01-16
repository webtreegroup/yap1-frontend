import { IState } from 'App.types'
import { ICurrentUserInfo } from '../api/auth.api'
import { IChat } from '../api/chat.api'

export const LOADER_ON = 'LOADER_ON'
export const LOADER_OFF = 'LOADER_OFF'
export const PROFILE_LOAD = 'PROFILE_LOAD'
export const CHATS_LOAD = 'CHATS_LOAD'
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT'

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
        active: false,
    },
    currentUser: {} as ICurrentUserInfo,
    chats: [],
}
