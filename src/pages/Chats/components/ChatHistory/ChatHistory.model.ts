import { IComponent } from "../../../../App.model.js"
import { IChatMessage } from "../ChatMessage/index.js"

export interface IChatHistory extends IComponent {
    messages?: IChatMessage[]
}