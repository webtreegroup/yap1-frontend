import { UserContract } from '../api/auth.api'
import { IChat } from '../api/chat.api'
import { store } from './store'
import {
    CHATS_LOAD,
    IConnectedChats,
    ISocketMessage,
    LOADER_OFF,
    LOADER_ON,
    PROFILE_LOAD,
    SET_CONNECTED_CHATS,
    SET_CURRENT_CHAT,
    ADD_MESSAGE,
    ADD_OLD_MESSAGES,
    SET_CURRENT_CHAT_USERS,
    SET_AUTH,
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

export function setCurrentUserInfoAction(payload: UserContract): void {
    store.dispatch({
        type: PROFILE_LOAD,
        payload,
    })
}

export function setChatsAction(payload: IChat[]): void {
    store.dispatch({
        type: CHATS_LOAD,
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

export function setCurrentChatUsers(payload?: UserContract[]): void {
    store.dispatch({
        type: SET_CURRENT_CHAT_USERS,
        payload,
    })
}

export function setUsers(payload?: UserContract[]): void {
    store.dispatch({
        type: SET_CURRENT_CHAT_USERS,
        payload,
    })
}

export function setAuth(payload: boolean): void {
    store.dispatch({
        type: SET_AUTH,
        payload,
    })
}
