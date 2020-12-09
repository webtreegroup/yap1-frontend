import { Block } from "../../../../core/Block.js"
import { ChatMessage } from "../ChatMessage/ChatMessage.js"
import { IChatHistory } from "./ChatHistory.model.js"
import { chatHistoryTmplRender } from "./ChatHistory.tmpl.js"

export class ChatHistory extends Block {
    constructor(props?: IChatHistory){
        const messages = props?.messages?.map(el => new ChatMessage(el))
        
        super('main', props, messages )
    }

    createResources() {
        this._element?.classList.add('chat-history', 'chat-history_not-selected')
    }

    render() {
        return chatHistoryTmplRender(this.props)
    }
}