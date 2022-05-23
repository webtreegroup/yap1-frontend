import { Component } from 'core/block'
import { classNames } from 'utils'
import { Link } from 'components'
import { setCurrentChatAction, store } from 'core/store'
import { ROUTES, Router } from 'core/router'
import { ChatGroupProps } from './ChatGroup.types'
import { chatGroupTmplRender } from './ChatGroup.tmpl'

export class ChatGroup extends Component<HTMLDivElement, ChatGroupProps> {
    constructor(props: ChatGroupProps) {
        const ChatSingleLink = new Link({
            onClick: () => {
                if (store?.value?.currentChatId) {
                    setCurrentChatAction(props.id)
                }

                Router.go(`${ROUTES.CHATS.path}/?chatId=${props.id}`)
            },
            title: props.name,
        })

        super('div', props, {
            ChatSingleLink,
        })
    }

    createResources({ isCurrent }: ChatGroupProps): void {
        const classes = classNames([
            'chats-item',
            isCurrent ? 'chats-item_current' : undefined,
        ])

        this.element?.classList.add(...classes)
    }

    componentShouldRender(): string {
        return chatGroupTmplRender(this.props)
    }
}
