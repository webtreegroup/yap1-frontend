import { Block } from '../../../../core/block/Block'
import { classNames } from '../../../../utils/common.utils'
import { IChatMessage } from './ChatMessage.types'
import { chatMessageTmplRender } from './ChatMessage.tmpl'

export class ChatMessage extends Block<HTMLDivElement> {
    constructor(props?: IChatMessage) {
        super('article', props)
    }

    createResources(): void {
        const classes = classNames([
            'chat-history-item',
            this.props.isOwn
                ? 'chat-history-item_own'
                : undefined,
        ])

        this._element?.classList.add(...classes)
    }

    render(): string {
        return chatMessageTmplRender(this.props)
    }
}
