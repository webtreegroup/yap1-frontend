import { Block } from 'core/block'
import { classNames } from 'utils'
import { chatMessageTmplRender } from './ChatMessage.tmpl'
import { ISocketMessage } from 'core/store'

export class ChatMessage extends Block<HTMLDivElement> {
    constructor(props?: ISocketMessage) {
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
