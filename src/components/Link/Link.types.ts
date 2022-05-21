import { ComponentProps } from 'App.types'

export interface LinkProps extends ComponentProps {
    title?: string
    path?: string
    onClick?: () => void
}
