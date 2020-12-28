import { IState, IStateValue } from "../App.types.js"

interface IReducers {
    [key: string]: Function
}

interface IAction {
    type: string
    payload?: IStateValue
}

export class Store {
    private subscribers: Function[]
    private reducers: IReducers
    private state: IState

    constructor(reducers = {}, initialState = {}) {
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

    private reduce(state: IState, action: IAction | {}) {
        const newState: IState = {}

        for (const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action)
        }

        return newState
    }
}

export function incrementCounter() {
    store.dispatch({
        type: 'INCREMENT'
    })
}

function counterReducer(state: any, action: IAction) {
    if (action.type === 'INCREMENT') {
        state = state + 1
    }
    return state
}

const reducers = {
    counter: counterReducer,
}

export const store = new Store(reducers, { counter: 0 })