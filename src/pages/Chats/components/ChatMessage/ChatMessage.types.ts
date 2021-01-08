import { IComponent } from "../../../../App.types"

export interface IChatMessage extends IComponent {
    time?: string
    text?: string
    check?: boolean
    isOwn?: boolean
}
