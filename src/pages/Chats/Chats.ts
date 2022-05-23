import './Chats.scss'

import { store } from 'core/store'
import { Component } from 'core/block'
import { ChatsAside } from './components/ChatsAside/ChatsAside'
import { ChatHistoryContainer } from './components'
import { ComponentProps } from 'core/block/Component.types'

export class Chats extends Component<HTMLDivElement, ComponentProps> {
    constructor(props: ComponentProps) {
        const ChatHistory = new ChatHistoryContainer()
        const ChatHistoryPlaceholder = new Component(
            'main',
            {
                className: ['chat-history', 'chat-history_not-selected'],
            },
            {},
            () => `
            <div class="chat-history__placeholder">
                Выберите чат чтобы отправить сообщение
            </div>
        `,
        )

        super(
            'main',
            {
                ...props,
                className: 'chats-page',
            },
            {
                root: [
                    new ChatsAside({
                        className: 'chats',
                        chats: store.value.chats,
                    }),
                    store.value.currentChatId
                        ? ChatHistory.createBlock()
                        : ChatHistoryPlaceholder,
                ],
            },
        )
    }

    componentDidMount(): void {
        const [Aside] = this.children.root as Component[]

        this.props.onLoadComponent?.().then(() => {
            store.subscribe((state) => {
                Aside.setProps({
                    chats: state.chats,
                })
            }, [])
        })
    }
}
