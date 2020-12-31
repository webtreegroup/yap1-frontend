import { IState } from "../../App.types.js"
import { ICurrentUserInfo } from "../api/auth.api.js"

export interface IStoreState extends IState {
    counter: number
    loader: {
        active: boolean
    }
    currentUser: ICurrentUserInfo
}

export const INITIAL_STATE = { 
    counter: 0,
    loader: {
        active: false
    },
    currentUser: {}
} as IStoreState
