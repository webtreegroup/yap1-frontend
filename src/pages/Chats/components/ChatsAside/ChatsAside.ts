import { IComponent } from "../../../../App.types.js"
import { Block } from "../../../../core/Block.js"
import { ChatGroup } from "../ChatGroup/ChatGroup.js"
import { CHATS } from "./ChatsAside.consts.js"
import { chatsAsideTmplRender } from "./ChatsAside.tmpl.js"

export class ChatsAside extends Block {
    constructor(props?: IComponent){
        const chats = CHATS.map(el => new ChatGroup(el))

        super('aside', props, chats)
    }

    createResources() {
        this._element?.classList.add('chats')
    }

    render() {
        return chatsAsideTmplRender()
    }
}