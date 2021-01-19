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
    private subscribers: [Function, string[]][]

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

    subscribe(fn: (currentState: IStoreState) => void, dependencies: string[]): Function {
        this.subscribers.push([fn, dependencies])
        fn(this.value)

        return () => {
            this.subscribers = this.subscribers.filter(([sub]) => sub !== fn) || null
        }
    }

    dispatch(action: IAction): void {
        this.state = this.reduce(this.state, action)
        this.subscribers.forEach(([fn, dependencies]) => {
            if (!dependencies.length) {
                fn(this.value)
            }

            if (Object.keys(this.value).some((key) => dependencies.includes(key))) {
                fn(this.value)
            }
        })
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
