import { Block } from '../../core/block/Block'
import { store } from '../../core/store/store'
import { MESSAGES } from './Chats.consts'
import { IChats } from './Chats.type'
import { ChatHistory } from './components/ChatHistory/ChatHistory'
import { ChatsAside } from './components/ChatsAside/ChatsAside'

/**
 * TODO: когда очередь дойдет до интеграции с остальными частями АПИ
 * функционал будет доработан, сейчас в качестве заглушки дублирует `Chats`,
 * с небольшими отличиями
 */
export class ChatSingle extends Block<HTMLDivElement> {
    constructor(props: IChats) {
        super(
            'main',
            {
                ...props,
                className: 'chats-page',
            },
            {
                root: [
                    new ChatsAside({ className: 'chats', chats: store.value.chats }),
                    new ChatHistory({ messages: MESSAGES }),
                ],
            },
        )
    }

    componentDidMount(): void {
        const [aside] = this._children.root as Block[]

        this.props.onLoadChats().then(() => {
            store.subscribe((state) => {
                aside.setProps({
                    chats: state.chats,
                })
            })
        })
    }
}
