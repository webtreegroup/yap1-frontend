export type StoreValue = any

export type StoreType = {
    [key: string]: StoreValue
}

export interface IComponent {
    className?: string
    children?: string | number | HTMLElement
}