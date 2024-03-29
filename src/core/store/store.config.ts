import { StoreType } from 'App.types'
import { WebSocketService } from 'core/websocket'
import { UserContract } from '../api/auth.api'
import { ChatContract } from '../api/chat.api'

export const LOADER_ON = 'LOADER_ON'
export const LOADER_OFF = 'LOADER_OFF'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_CURRENT_USER_CHATS = 'SET_CURRENT_USER_CHATS'
export const SET_CHATS = 'SET_CHATS'
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT'
export const SET_CONNECTED_CHATS = 'SET_CONNECTED_CHATS'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_OLD_MESSAGES = 'ADD_OLD_MESSAGES'
export const SET_CURRENT_CHAT_USERS = 'SET_CURRENT_CHAT_USERS'
export const SET_USERS = 'SET_USERS'
export const SET_AUTH = 'SET_AUTH'
export const CLEAN_STORE = 'CLEAN_STORE'

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
    currentUserChats: ChatContract[]
    chats: ChatContract[]
    connectedChats: IConnectedChats
    currentChat?: ChatContract
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
    currentUserChats: [],
    chats: [],
    connectedChats: {},
    messages: [],
    currentChatUsers: [],
    users: [],
    auth: false,
}
