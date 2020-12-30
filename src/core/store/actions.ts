import { store } from "./store.js"

export const LOADER_ON = 'LOADER_ON'
export const LOADER_OFF = 'LOADER_OFF'

export function onLoader() {
    store.dispatch({
        type: LOADER_ON
    })
}

export function offLoader() {
    store.dispatch({
        type: LOADER_OFF
    })
}