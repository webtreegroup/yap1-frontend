import { Component } from 'core/block'
import { Link } from 'components'
import { ROUTES } from 'core/router'
import { ComponentProps } from 'core/block/Component'
import { ChatContract } from 'core/api'

export interface MessagingItemProps extends ComponentProps, ChatContract {}

export class MessagingItem extends Component<
    HTMLDivElement,
    MessagingItemProps
> {
    constructor(props: MessagingItemProps) {
        const ChatSingleLink = new Link({
            path: `${ROUTES.MESSSAGING.path}/?chatId=${props.id}`,
            title: props.name,
        })

        super(
            'li',
            { ...props, className: ['MessagingItem', 'list-group-item'] },
            {
                ChatSingleLink,
            },
        )
    }
}
