import { IComponent } from "../../App.types.js"

export interface ILink extends IComponent {
    title?: string
    path?: string
    onClick?: () => void
}