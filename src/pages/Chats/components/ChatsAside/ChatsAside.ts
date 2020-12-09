import { IComponent } from "../../../../App.model.js"
import { Block } from "../../../../core/Block.js"
import { ChatGroup } from "../index.js"
import { CHATS } from "./ChatsAside.consts.js"
import { chatsAsideTmplRender } from "./index.js"

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