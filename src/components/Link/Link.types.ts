import { IComponent } from "../../App.types.js"

export interface ILink extends IComponent {
    text?: string
    href?: string
    onClick?: () => void
}