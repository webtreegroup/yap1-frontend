import { Block } from "../../../../core/Block.js"
import { chatGroupTmplRender, IChatGroup } from "./index.js"

export class ChatGroup extends Block<HTMLDivElement> {
    constructor(props?: IChatGroup){
        super('div', props)
    }

    createResources() {
        this._element?.classList.add('chats-item')
    }

    render() {
        return chatGroupTmplRender(this.props)
    }
}