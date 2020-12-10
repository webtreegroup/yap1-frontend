import { IComponent } from "../../../../App.types.js"
import { IChatMessage } from "../ChatMessage/ChatMessage.types.js";

export interface IChatHistory extends IComponent {
    messages?: IChatMessage[]
}