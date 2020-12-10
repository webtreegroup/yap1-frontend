export type StoreValue = any

export type Store = {
    [key: string]: StoreValue
}

export interface IComponent {
    className?: string
    children?: string | number | HTMLElement
}