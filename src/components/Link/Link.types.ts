import { ComponentProps } from 'core/block/Component.types'

export interface LinkProps extends ComponentProps {
    title?: string
    path?: string
    onClick?: () => void
}
