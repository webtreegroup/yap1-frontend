export type StoreType<T = any> = {
    [key: string]: T
}

export interface ComponentProps {
    className?: string
    children?: string | number | HTMLElement
    onLoadComponent?: () => Promise<void>
}
