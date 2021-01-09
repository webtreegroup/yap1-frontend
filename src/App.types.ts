export type IStateValue = any

export type IState = {
    [key: string]: IStateValue
}

export interface IComponent {
    className?: string
    children?: string | number | HTMLElement
}
