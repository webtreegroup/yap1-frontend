import { store } from "./store.js";
export const LOADER_ON = 'LOADER_ON';
export const LOADER_OFF = 'LOADER_OFF';
export const PROFILE_LOAD = 'PROFILE_LOAD';
export function onLoader() {
    store.dispatch({
        type: LOADER_ON
    });
}
export function offLoader() {
    store.dispatch({
        type: LOADER_OFF
    });
}
export function onGetCurrentUserInfo(payload) {
    store.dispatch({
        type: PROFILE_LOAD,
        payload
    });
}
