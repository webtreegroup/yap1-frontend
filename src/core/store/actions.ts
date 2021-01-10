import { ICurrentUserInfo } from '../api/auth.api'
import { IChat } from '../api/chat.api'
import { store } from './store'
import {
    CHATS_LOAD,
    LOADER_OFF,
    LOADER_ON,
    PROFILE_LOAD,
    SET_CURRENT_CHAT,
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

export function getCurrentUserInfoAction(payload: ICurrentUserInfo): void {
    store.dispatch({
        type: PROFILE_LOAD,
        payload,
    })
}

export function getChatsAction(payload: IChat[]): void {
    store.dispatch({
        type: CHATS_LOAD,
        payload,
    })
}

export function setCurrentChatAction(payload?: number): void {
    store.dispatch({
        type: SET_CURRENT_CHAT,
        payload,
    })
}
