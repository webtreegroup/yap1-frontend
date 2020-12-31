import { LOADER_OFF, LOADER_ON } from "./actions.js";
export function loaderReducer(state, action) {
    switch (action.type) {
        case LOADER_ON:
            return Object.assign(Object.assign({}, state), { active: true });
        case LOADER_OFF:
            return Object.assign(Object.assign({}, state), { active: false });
    }
    return state;
}
