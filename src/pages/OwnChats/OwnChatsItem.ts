import { Component } from 'core/block'
import { Link } from 'components'
import { setCurrentChatAction, store } from 'core/store'
import { ROUTES, Router } from 'core/router'
import { ComponentProps } from 'core/block/Component.types'

export interface OwnChatsItemProps extends ComponentProps {
    id?: string
    name?: string
    lastMessage?: string
    time?: string
    unread?: number
    isOwnMessage?: boolean
    isCurrent?: boolean
}

export class OwnChatsItem extends Component<HTMLDivElement, OwnChatsItemProps> {
    constructor(props: OwnChatsItemProps) {
        const ChatSingleLink = new Link({
            onClick: () => {
                if (store?.value?.currentChatId) {
                    setCurrentChatAction(props.id)
                }

                Router.go(`${ROUTES.CHATS.path}/?chatId=${props.id}`)
            },
            title: props.name,
        })

        super(
            'li',
            { ...props, className: ['OwnChatsItem', 'list-group-item'] },
            {
                ChatSingleLink,
            },
        )
    }
}
