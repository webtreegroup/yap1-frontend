import { Block } from 'core/block'
import { classNames } from 'utils'
import { Link } from 'components'
import { setCurrentChatAction, store } from 'core/store'
import { ROUTES, Router } from 'core/router'
import { IChatGroup } from './ChatGroup.types'
import { chatGroupTmplRender } from './ChatGroup.tmpl'

export class ChatGroup extends Block<HTMLDivElement, IChatGroup> {
    constructor(props: IChatGroup) {
        const ChatSingleLink = new Link({
            onClick: () => {
                if (store?.value?.currentChatId) {
                    setCurrentChatAction(props.id)
                }

                Router.go(`${ROUTES.CHATS.path}/${props.id}`)
            },
            title: props.name,
        })

        super('div', props, {
            ChatSingleLink,
        })
    }

    createResources({ isCurrent }: IChatGroup): void {
        const classes = classNames([
            'chats-item',
            isCurrent ? 'chats-item_current' : undefined,
        ])

        this._element?.classList.add(...classes)
    }

    render(): string {
        return chatGroupTmplRender(this.props)
    }
}
