import { IComponent } from "../../../../App.model.js"
import { IChatMessage } from "../ChatMessage/ChatMessage.model.js";

export interface IChatHistory extends IComponent {
    messages?: IChatMessage[]
}