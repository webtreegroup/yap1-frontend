import { ComponentProps } from 'core/block/Component.types'

export interface PopupProps extends ComponentProps {
    title?: string
    isActive?: boolean
    isClosable?: boolean
    counter?: number
}
