import { IComponent } from "../../App.model.js"

export interface IPopup extends IComponent {
    title?: string
    isActive?: boolean
    isClosable?: boolean
}