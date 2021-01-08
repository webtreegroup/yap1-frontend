import { CHATS_LOAD, LOADER_OFF, LOADER_ON, PROFILE_LOAD, SET_CURRENT_CHAT } from "./actions"
import { IStoreState } from "./store.config"
import { IAction } from "./store"

export function loaderReducer(state: IStoreState, action: IAction) {
    switch (action.type) {
        case LOADER_ON:
            return {
                ...state,
                active: true
            }
        case LOADER_OFF:
            return {
                ...state,
                active: false
            }
    }

    return state
}

export function currentUserReducer(state: IStoreState, action: IAction) {
    switch (action.type) {
        case PROFILE_LOAD:
            return {
                ...state,
                ...action.payload
            }
    }

    return state
}

export function chatsReducer(state: IStoreState, action: IAction) {
    switch (action.type) {
        case CHATS_LOAD:
            return action.payload
    }

    return state
}

export function currentChatReducer(state: IStoreState, action: IAction) {
    switch (action.type) {
        case SET_CURRENT_CHAT:
            return action.payload
    }

    return state
}

export const reducers = {
    loader: loaderReducer,
    currentUser: currentUserReducer,
    chats: chatsReducer,
    currentChatId: currentChatReducer
}