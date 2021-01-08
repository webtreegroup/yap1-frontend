import { IComponent } from "../../../../App.types"
import { IChatMessage } from "../ChatMessage/ChatMessage.types";

export interface IChatHistory extends IComponent {
    messages?: IChatMessage[]
}