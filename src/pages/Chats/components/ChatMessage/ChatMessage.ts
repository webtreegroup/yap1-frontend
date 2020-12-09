import { Block } from "../../../../core/Block.js"
import { classNames } from "../../../../utils/common.utils.js"
import { IChatMessage } from "./ChatMessage.model.js"
import { chatMessageTmplRender } from "./ChatMessage.tmpl.js"

export class ChatMessage extends Block<HTMLDivElement> {
    constructor(props?: IChatMessage){
        super('article', props)
    }

    createResources() {
        const classes = classNames([
            'chat-history-item', 
            this.props.isOwn 
                ? 'chat-history-item_own'
                : undefined
            ])
        
        this._element?.classList.add(...classes)
    }

    render() {
        return chatMessageTmplRender(this.props)
    }
}