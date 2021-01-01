export type IStateValue = any

export type IState = {
    [key: string]: IStateValue
}

export interface IComponent {
    // [key: string]: IStateValue
    className?: string
    children?: string | number | HTMLElement
}