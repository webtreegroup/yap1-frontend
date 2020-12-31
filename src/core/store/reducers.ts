import { LOADER_OFF, LOADER_ON } from "./actions.js"
import { IStoreState } from "./store.config.js"
import { IAction } from "./store.js"

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