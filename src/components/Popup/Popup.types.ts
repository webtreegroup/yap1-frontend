import { IComponent } from '../../App.types'

export interface IPopup extends IComponent {
    title?: string
    isActive?: boolean
    isClosable?: boolean
    counter?: number
}
