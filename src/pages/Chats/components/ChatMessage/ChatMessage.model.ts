import { IComponent } from "../../../../App.model.js"

export interface IChatMessage extends IComponent {
    time?: string
    text?: string
    check?: boolean
    isOwn?: boolean
}
