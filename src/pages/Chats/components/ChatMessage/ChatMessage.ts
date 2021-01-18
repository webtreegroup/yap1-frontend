import { Block } from 'core/block'
import { classNames } from 'utils'
import { chatMessageTmplRender } from './ChatMessage.tmpl'
import { IChatMessage } from './ChatMessage.types'

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
