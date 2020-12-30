import { IState } from "../../App.types.js"

export interface IStoreState extends IState {
    counter: number
    loader: {
        active: boolean
    }
}

export const INITIAL_STATE: IStoreState = { 
    counter: 0,
    loader: {
        active: false
    }
}
