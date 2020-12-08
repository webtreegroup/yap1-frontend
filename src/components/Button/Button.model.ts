import { IComponent } from "../../App.model.js"

export interface IButton extends IComponent {
    text?: string
    btnType?: string
}