import { Block } from 'core/block'
import { store } from 'core/store'
import { IChats } from './Chats.type'
import { ChatHistoryContainer } from './components'
import { ChatsAside } from './components/ChatsAside/ChatsAside'

/**
 * TODO: когда очередь дойдет до интеграции с остальными частями АПИ
 * функционал будет доработан, сейчас в качестве заглушки дублирует `Chats`,
 * с небольшими отличиями
 */
export class ChatSingle extends Block<HTMLDivElement> {
    constructor(props: IChats) {
        const ChatHistory = new ChatHistoryContainer()

        super(
            'main',
            {
                ...props,
                className: 'chats-page',
            },
            {
                root: [
                    new ChatsAside({ className: 'chats', chats: store.value.chats }),
                    ChatHistory.createBlock(),
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
