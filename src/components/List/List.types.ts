import { ComponentProps } from 'core/block/Component.types'

export interface ListLinkProps {
    path: string
    title: string
}

export interface ListProps extends ComponentProps {
    list?: ListLinkProps[]
}
