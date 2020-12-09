import { Block } from "../../../../core/Block.js"
import { IChatGroup } from "./ChatGroup.model.js"
import { chatGroupTmplRender } from "./ChatGroup.tmpl.js"

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