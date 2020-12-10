import { IComponent } from "../../App.types.js"

export interface ILink extends IComponent {
    text?: string
    onClick?: (e: Event) => void
}