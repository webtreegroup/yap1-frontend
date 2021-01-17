import { IState } from 'App.types'
import { ICurrentUserInfo } from '../api/auth.api'
import { IChat } from '../api/chat.api'

export const LOADER_ON = 'LOADER_ON'
export const LOADER_OFF = 'LOADER_OFF'
export const PROFILE_LOAD = 'PROFILE_LOAD'
export const CHATS_LOAD = 'CHATS_LOAD'
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT'
export const SET_CONNECTED_CHATS = 'SET_CONNECTED_CHATS'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_OLD_MESSAGES = 'ADD_OLD_MESSAGES'

export interface ISocketMessage {
    content: string
    userId: number
    chatId: number
    time: string
}

export interface ISocketOldMessage {
    content: string
    chat_id: number
    user_id: number
    time: string
}

export interface IConnectedChats {
    [key: string]: string
}
export interface IStoreState extends IState {
    loader: {
        active: boolean
    }
    currentUser: ICurrentUserInfo
    chats: IChat[],
    connectedChats: IConnectedChats
    currentChatId?: number
    messages: ISocketMessage[]
}

export const INITIAL_STATE = {
    loader: {
        active: false,
    },
    currentUser: {} as ICurrentUserInfo,
    chats: [],
    connectedChats: {},
    messages: [],
}
