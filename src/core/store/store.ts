import { StoreType } from 'App.types'
import { reducers } from './reducers'
import { INITIAL_STATE, StoreProps } from './store.config'

export interface IAction {
    type: string
    payload?: any
}

export class Store {
    private subscribers: [Function, string[]][]

    private reducers: StoreType<Function>

    private state: StoreProps

    constructor(reducers = {}, initialState = {} as StoreProps) {
        this.subscribers = []
        this.reducers = reducers
        this.state = this.reduce(initialState, {})
    }

    get value(): StoreProps {
        return this.state
    }

    subscribe(
        fn: (currentState: StoreProps) => void,
        dependencies: string[],
    ): Function {
        this.subscribers.push([fn, dependencies])
        fn(this.value)

        return () => {
            this.subscribers =
                this.subscribers.filter(([sub]) => sub !== fn) || null
        }
    }

    dispatch(action: IAction): void {
        this.state = this.reduce(this.state, action)
        this.subscribers.forEach(([fn, dependencies]) => {
            if (!dependencies.length) {
                fn(this.value)
            }

            if (
                Object.keys(this.value).some((key) =>
                    dependencies.includes(key),
                )
            ) {
                fn(this.value)
            }
        })
    }

    private reduce(state: StoreProps, action: IAction | {}) {
        const newState = {} as StoreProps

        for (const prop in this.reducers) {
            if (Object.prototype.hasOwnProperty.call(this.reducers, prop)) {
                newState[prop] = this.reducers[prop](state[prop], action)
            }
        }

        return newState
    }
}

export const store = new Store(reducers, INITIAL_STATE)
