import { StoreType } from 'App.types'
import { WebSocketService } from 'core/websocket'
import { UserContract } from '../api/auth.api'
import { IChat } from '../api/chat.api'

export const LOADER_ON = 'LOADER_ON'
export const LOADER_OFF = 'LOADER_OFF'
export const PROFILE_LOAD = 'PROFILE_LOAD'
export const CHATS_LOAD = 'CHATS_LOAD'
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT'
export const SET_CONNECTED_CHATS = 'SET_CONNECTED_CHATS'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_OLD_MESSAGES = 'ADD_OLD_MESSAGES'
export const SET_CURRENT_CHAT_USERS = 'SET_CURRENT_CHAT_USERS'
export const SET_USERS = 'SET_USERS'
export const SET_AUTH = 'SET_AUTH'

export interface ISocketMessage {
    content: string
    userId: string
    chatId: string
    time: string
}

export interface ISocketOldMessage {
    content: string
    chat_id: string
    user_id: string
    time: string
}

export interface IConnectedChats {
    [key: string]: WebSocketService
}
export interface StoreProps extends StoreType {
    loader: {
        active: boolean
    }
    currentUser: UserContract
    chats: IChat[]
    connectedChats: IConnectedChats
    currentChatId?: string
    messages: ISocketMessage[]
    currentChatUsers: UserContract[]
    users: UserContract[]
    auth: boolean
}

export const INITIAL_STATE = {
    loader: {
        active: false,
    },
    currentUser: {} as UserContract,
    chats: [],
    connectedChats: {},
    messages: [],
    currentChatUsers: [],
    users: [],
    auth: false,
}
