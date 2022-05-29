import { Component } from 'core/block'
import { Link } from 'components'
import { ROUTES } from 'core/router'
import { ComponentProps } from 'core/block/Component'
import { ChatContract } from 'core/api'

export interface ChatsSidebarItemProps extends ComponentProps, ChatContract {}

export class ChatsSidebarItem extends Component<
    HTMLDivElement,
    ChatsSidebarItemProps
> {
    constructor(props: ChatsSidebarItemProps) {
        const ChatSingleLink = new Link({
            path: `${ROUTES.MESSSAGING.path}/?chatId=${props.id}`,
            title: props.name,
        })

        super(
            'li',
            { ...props, className: ['ChatsSidebarItem', 'list-group-item'] },
            {
                ChatSingleLink,
            },
        )
    }
}
