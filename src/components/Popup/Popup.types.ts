import { ComponentProps } from 'core/block/Component'

export interface PopupProps extends ComponentProps {
    title?: string
    isActive?: boolean
    isClosable?: boolean
    counter?: number
}
