import { Block } from '../../../../core/block/Block'
import { classNames } from '../../../../utils/common.utils'
import { IChatGroup } from './ChatGroup.types'
import { chatGroupTmplRender } from './ChatGroup.tmpl'
import { Link } from '../../../../components/Link/Link'
import { ROUTES } from '../../../../core/router/Router.config'
import { Router } from '../../../../core/router/Router'
import { setCurrentChatAction } from '../../../../core/store/actions'

export class ChatGroup extends Block<HTMLDivElement, IChatGroup> {
    constructor(props: IChatGroup) {
        const ChatSingleLink = new Link({
            onClick: () => {
                setCurrentChatAction(props.id)
                Router.go(`${ROUTES.CHATS.path}/${props.id}`)
            },
            title: props.name,
        })

        super('div', props, {
            ChatSingleLink,
        })
    }

    createResources({ isCurrent }: IChatGroup) {
        const classes = classNames([
            'chats-item',
            isCurrent ? 'chats-item_current' : undefined,
        ])

        this._element?.classList.add(...classes)
    }

    render() {
        return chatGroupTmplRender(this.props)
    }
}
