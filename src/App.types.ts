export type StoreType<T = any> = {
    [key: string]: T
}

export type ColorTheme =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'

export interface ValidateResultProps {
    state: boolean
    fields: string[]
}
