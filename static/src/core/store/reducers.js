import { CHATS_LOAD, LOADER_OFF, LOADER_ON, PROFILE_LOAD } from "./actions.js";
export function loaderReducer(state, action) {
    switch (action.type) {
        case LOADER_ON:
            return Object.assign(Object.assign({}, state), { active: true });
        case LOADER_OFF:
            return Object.assign(Object.assign({}, state), { active: false });
    }
    return state;
}
export function currentUserReducer(state, action) {
    switch (action.type) {
        case PROFILE_LOAD:
            return Object.assign(Object.assign({}, state), action.payload);
    }
    return state;
}
export function chatsReducer(state, action) {
    switch (action.type) {
        case CHATS_LOAD:
            return action.payload;
    }
    return state;
}
export const reducers = {
    loader: loaderReducer,
    currentUser: currentUserReducer,
    chats: chatsReducer
};
