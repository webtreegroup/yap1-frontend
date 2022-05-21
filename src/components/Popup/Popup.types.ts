import { ComponentProps } from 'App.types'

export interface PopupProps extends ComponentProps {
    title?: string
    isActive?: boolean
    isClosable?: boolean
    counter?: number
}
