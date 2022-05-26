import {
    SET_CHATS,
    StoreProps,
    LOADER_OFF,
    LOADER_ON,
    SET_CURRENT_USER,
    SET_CONNECTED_CHATS,
    SET_CURRENT_CHAT,
    ADD_MESSAGE,
    ADD_OLD_MESSAGES,
    SET_CURRENT_CHAT_USERS,
    SET_USERS,
    SET_AUTH,
    SET_CURRENT_USER_CHATS,
} from './store.config'
import { IAction } from './store'

export function loaderReducer(
    state: StoreProps['loader'],
    action: IAction,
): StoreProps['loader'] {
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

export function currentUserReducer(
    state: StoreProps['currentUser'],
    action: IAction,
): StoreProps['currentUser'] {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export function chatsReducer(
    state: StoreProps['chats'],
    action: IAction,
): StoreProps['chats'] {
    switch (action.type) {
        case SET_CHATS:
            return action.payload
        default:
            return state
    }
}

export function currentUserChatsReducer(
    state: StoreProps['currentUserChats'],
    action: IAction,
): StoreProps['currentUserChats'] {
    switch (action.type) {
        case SET_CURRENT_USER_CHATS:
            return action.payload
        default:
            return state
    }
}

export function currentChatReducer(
    state: StoreProps['currentChat'],
    action: IAction,
): StoreProps['currentChat'] {
    switch (action.type) {
        case SET_CURRENT_CHAT:
            return action.payload
        default:
            return state
    }
}

export function currentChatUsersReducer(
    state: StoreProps['currentChatUsers'],
    action: IAction,
): StoreProps['currentChatUsers'] {
    switch (action.type) {
        case SET_CURRENT_CHAT_USERS:
            return action.payload
        default:
            return state
    }
}

export function usersReducer(
    state: StoreProps['users'],
    action: IAction,
): StoreProps['users'] {
    switch (action.type) {
        case SET_USERS:
            return action.payload
        default:
            return state
    }
}

export function authReducer(
    state: StoreProps['auth'],
    action: IAction,
): StoreProps['auth'] {
    switch (action.type) {
        case SET_AUTH:
            return action.payload
        default:
            return state
    }
}

export function connectedChatsReducer(
    state: StoreProps['connectedChats'],
    action: IAction,
): StoreProps['connectedChats'] {
    switch (action.type) {
        case SET_CONNECTED_CHATS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export function messagesReducer(
    state: StoreProps['messages'],
    action: IAction,
): StoreProps['messages'] {
    switch (action.type) {
        case ADD_MESSAGE:
            return [action.payload, ...state]
        case ADD_OLD_MESSAGES:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export const reducers = {
    loader: loaderReducer,
    currentUser: currentUserReducer,
    currentUserChats: currentUserChatsReducer,
    chats: chatsReducer,
    currentChat: currentChatReducer,
    connectedChats: connectedChatsReducer,
    messages: messagesReducer,
    currentChatUsers: currentChatUsersReducer,
    users: usersReducer,
    auth: authReducer,
}
