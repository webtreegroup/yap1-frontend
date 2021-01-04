import { store } from "./store.js";
export const LOADER_ON = 'LOADER_ON';
export const LOADER_OFF = 'LOADER_OFF';
export const PROFILE_LOAD = 'PROFILE_LOAD';
export const CHATS_LOAD = 'CHATS_LOAD';
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';
export function loaderOnAction() {
    store.dispatch({
        type: LOADER_ON
    });
}
export function loaderOffAction() {
    store.dispatch({
        type: LOADER_OFF
    });
}
export function getCurrentUserInfoAction(payload) {
    store.dispatch({
        type: PROFILE_LOAD,
        payload
    });
}
export function getChatsAction(payload) {
    store.dispatch({
        type: CHATS_LOAD,
        payload
    });
}
export function setCurrentChatAction(payload) {
    store.dispatch({
        type: SET_CURRENT_CHAT,
        payload
    });
}
//# sourceMappingURL=actions.js.map