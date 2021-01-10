import {
    CHATS_LOAD,
    IStoreState,
    LOADER_OFF,
    LOADER_ON,
    PROFILE_LOAD,
    SET_CURRENT_CHAT,
} from './store.config'
import { IAction } from './store'

export function loaderReducer(state: IStoreState, action: IAction): IStoreState {
    switch (action.type) {
    case LOADER_ON:
        return {
            ...state,
            active: true,
        }
    case LOADER_OFF:
        return {
            ...state,
            active: false,
        }
    default:
        return state
    }
}

export function currentUserReducer(state: IStoreState, action: IAction): IStoreState {
    switch (action.type) {
    case PROFILE_LOAD:
        return {
            ...state,
            ...action.payload,
        }
    default:
        return state
    }
}

export function chatsReducer(state: IStoreState, action: IAction): IStoreState {
    switch (action.type) {
    case CHATS_LOAD:
        return action.payload
    default:
        return state
    }
}

export function currentChatReducer(state: IStoreState, action: IAction): IStoreState {
    switch (action.type) {
    case SET_CURRENT_CHAT:
        return action.payload
    default:
        return state
    }
}

export const reducers = {
    loader: loaderReducer,
    currentUser: currentUserReducer,
    chats: chatsReducer,
    currentChatId: currentChatReducer,
}
