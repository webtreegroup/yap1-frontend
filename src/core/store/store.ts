import { reducers } from "./reducers.js"
import { IStateValue } from "../../App.types.js"
import { INITIAL_STATE, IStoreState } from "./store.config.js"

interface IReducers {
    [key: string]: Function
}

export interface IAction {
    type: string
    payload?: IStateValue
}

export class Store {
    private subscribers: Function[]
    private reducers: IReducers
    private state: IStoreState

    constructor(reducers = {}, initialState = {} as IStoreState) {
        this.subscribers = []
        this.reducers = reducers
        this.state = this.reduce(initialState, {})
    }

    get value() {
        return this.state
    }

    subscribe(fn: Function) {
        this.subscribers = [...this.subscribers, fn]
        fn(this.value)

        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== fn)
        }
    }

    dispatch(action: IAction) {
        this.state = this.reduce(this.state, action)
        this.subscribers.forEach(fn => fn(this.value))
    }

    private reduce(state: IStoreState, action: IAction | {}) {
        const newState = {} as IStoreState

        for (const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action)
        }

        return newState
    }
}

export const store = new Store(reducers, INITIAL_STATE)