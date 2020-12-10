import { IComponent } from "../../App.model.js"

export interface ILink extends IComponent {
    text?: string
    onClick?: (e: Event) => void
}