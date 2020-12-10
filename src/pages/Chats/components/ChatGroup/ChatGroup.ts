import { Block } from "../../../../core/Block.js"
import { classNames } from "../../../../utils/common.utils.js"
import { IChatGroup } from "./ChatGroup.types.js"
import { chatGroupTmplRender } from "./ChatGroup.tmpl.js"

export class ChatGroup extends Block<HTMLDivElement> {
    constructor(props?: IChatGroup){
        super('div', props)
    }

    createResources({ isCurrent }: IChatGroup) {
        const classes = classNames([
            'chats-item', 
            isCurrent ? 'chats-item_current' : undefined
        ])

        this._element?.classList.add(...classes)
    }

    render() {
        return chatGroupTmplRender(this.props)
    }
}