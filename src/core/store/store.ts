import { reducers } from './reducers'
import { IStateValue } from 'App.types'
import { INITIAL_STATE, IStoreState } from './store.config'

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

    get value(): IStoreState {
        return this.state
    }

    subscribe(fn: (currentState: IStoreState) => void): Function {
        this.subscribers = [...this.subscribers, fn]
        fn(this.value)

        return () => {
            this.subscribers = this.subscribers.filter((sub) => sub !== fn)
        }
    }

    dispatch(action: IAction): void {
        this.state = this.reduce(this.state, action)
        this.subscribers.forEach((fn) => fn(this.value))
    }

    private reduce(state: IStoreState, action: IAction | {}) {
        const newState = {} as IStoreState

        for (const prop in this.reducers) {
            if (Object.prototype.hasOwnProperty.call(this.reducers, prop)) {
                newState[prop] = this.reducers[prop](state[prop], action)
            }
        }

        return newState
    }
}

export const store = new Store(reducers, INITIAL_STATE)
