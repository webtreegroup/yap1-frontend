import { IComponent } from "../../App.model"

export interface IButton extends IComponent {
    text?: string
    btnType?: string
}