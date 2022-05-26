import { UserContract } from '../api/auth.api'
import { ChatContract } from '../api/chat.api'
import { store } from './store'
import {
    SET_CHATS,
    IConnectedChats,
    ISocketMessage,
    LOADER_OFF,
    LOADER_ON,
    SET_CURRENT_USER,
    SET_CONNECTED_CHATS,
    SET_CURRENT_CHAT,
    ADD_MESSAGE,
    ADD_OLD_MESSAGES,
    SET_CURRENT_CHAT_USERS,
    SET_AUTH,
    SET_USERS,
    SET_CURRENT_USER_CHATS,
} from './store.config'

export function loaderOnAction(): void {
    store.dispatch({
        type: LOADER_ON,
    })
}

export function loaderOffAction(): void {
    store.dispatch({
        type: LOADER_OFF,
    })
}

export function setCurrentUserAction(payload: UserContract): void {
    store.dispatch({
        type: SET_CURRENT_USER,
        payload,
    })
}

export function setCurrentUserChatsAction(payload: ChatContract[]): void {
    store.dispatch({
        type: SET_CURRENT_USER_CHATS,
        payload,
    })
}

export function setChatsAction(payload: ChatContract[]): void {
    store.dispatch({
        type: SET_CHATS,
        payload,
    })
}

export function setCurrentChatAction(payload?: string): void {
    store.dispatch({
        type: SET_CURRENT_CHAT,
        payload,
    })
}

export function setConnectedChatsAction(payload?: IConnectedChats): void {
    store.dispatch({
        type: SET_CONNECTED_CHATS,
        payload,
    })
}

export function addMessageAction(payload?: ISocketMessage): void {
    store.dispatch({
        type: ADD_MESSAGE,
        payload,
    })
}

export function addOldMessagesAction(payload?: ISocketMessage[]): void {
    store.dispatch({
        type: ADD_OLD_MESSAGES,
        payload,
    })
}

export function setCurrentChatUsersAction(payload?: UserContract[]): void {
    store.dispatch({
        type: SET_CURRENT_CHAT_USERS,
        payload,
    })
}

export function setUsersAction(payload?: UserContract[]): void {
    store.dispatch({
        type: SET_USERS,
        payload,
    })
}

export function setAuthAction(payload: boolean): void {
    store.dispatch({
        type: SET_AUTH,
        payload,
    })
}
