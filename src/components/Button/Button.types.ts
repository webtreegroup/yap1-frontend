import { IComponent } from "../../App.types.js"

export interface IButton extends IComponent {
    text?: string
    btnType?: string
}