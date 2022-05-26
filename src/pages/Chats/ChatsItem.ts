import { Component } from 'core/block'
import { Link } from 'components'
import { ROUTES } from 'core/router'
import { ComponentProps } from 'core/block/Component.types'
import { ChatContract } from 'core/api'

export interface ChatsItemProps extends ComponentProps, ChatContract {}

export class ChatsItem extends Component<HTMLDivElement, ChatsItemProps> {
    constructor(props: ChatsItemProps) {
        const ChatSingleLink = new Link({
            path: `${ROUTES.CHATS.path}/?chatId=${props.id}`,
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
