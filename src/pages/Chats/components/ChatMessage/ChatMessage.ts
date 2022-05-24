import './ChatMessage.scss'
import { Component } from 'core/block'
import { classNames } from 'utils'
import { chatMessageTmplRender } from './ChatMessage.tmpl'
import { IChatMessage } from './ChatMessage.types'

export class ChatMessage extends Component<HTMLDivElement> {
    constructor(props?: IChatMessage) {
        super('article', props)
    }

    createResources(): void {
        const classes = classNames([
            'chat-message',
            this.props.isOwn ? 'chat-message_own' : undefined,
        ])

        this.element?.classList.add(...classes)
    }

    setComponentTemplate(): string {
        return chatMessageTmplRender(this.props)
    }
}
