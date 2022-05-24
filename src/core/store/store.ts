import { StoreType } from 'App.types'
import { reducers } from './reducers'
import { INITIAL_STATE, StoreProps } from './store.config'

export interface IAction {
    type: string
    payload?: any
}

export class Store {
    private _subscribers: [Function, string[]][]

    private _reducers: StoreType<Function>

    private _state: StoreProps

    constructor(reducers = {}, initialState = {} as StoreProps) {
        this._subscribers = []
        this._reducers = reducers
        this._state = this.reduce(initialState, {})
    }

    get value(): StoreProps {
        return this._state
    }

    subscribe(
        fn: (currentState: StoreProps) => void,
        dependencies: string[],
    ): Function {
        this._subscribers.push([fn, dependencies])

        return () => {
            this._subscribers =
                this._subscribers.filter(([sub]) => sub !== fn) || null
        }
    }

    dispatch(action: IAction): void {
        this._state = this.reduce(this._state, action)
        this._subscribers.forEach(([fn, dependencies]) => {
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

        for (const prop in this._reducers) {
            if (Object.prototype.hasOwnProperty.call(this._reducers, prop)) {
                newState[prop] = this._reducers[prop](state[prop], action)
            }
        }

        Object.keys(this._reducers).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(this._reducers, key)) {
                newState[key] = this._reducers[key](state[key], action)
            }
        })

        return newState
    }
}

export const store = new Store(reducers, INITIAL_STATE)

window.store = store
