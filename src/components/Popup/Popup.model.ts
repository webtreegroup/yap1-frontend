import { IComponent } from "../../App.model";

export interface IPopup extends IComponent {
    title?: string
    isActive?: boolean
    id?: string
    isClosable?: boolean
}