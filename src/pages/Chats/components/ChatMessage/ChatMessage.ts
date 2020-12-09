import { Block } from "../../../../core/Block.js"
import { chatMessageTmplRender, IChatMessage } from "./index.js"

export class ChatMessage extends Block<HTMLDivElement> {
    constructor(props?: IChatMessage){
        super('article', props)
    }

    createResources() {
        const classes = [
            'chat-history-item', 
            this.props.isOwn 
                ? 'chat-history-item_own'
                : undefined
            ].filter(Boolean) as string[]
        
        this._element?.classList.add(...classes)
    }

    render() {
        return chatMessageTmplRender(this.props)
    }
}