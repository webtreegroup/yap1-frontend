import { Component } from 'core/block'
import { Link } from 'components'
import { setCurrentChatAction, store } from 'core/store'
import { ROUTES, Router } from 'core/router'
import { ComponentProps } from 'core/block/Component.types'

export interface ChatsItemProps extends ComponentProps {
    id?: string
    name?: string
    lastMessage?: string
    time?: string
    unread?: number
    isOwnMessage?: boolean
    isCurrent?: boolean
}

export class ChatsItem extends Component<HTMLDivElement, ChatsItemProps> {
    constructor(props: ChatsItemProps) {
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
            { ...props, className: 'list-group-item' },
            {
                ChatSingleLink,
            },
        )
    }
}
