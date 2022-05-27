import { store } from 'core/store'
import { Component } from 'core/block'
import { ChatsAside } from './components/ChatsAside/ChatsAside'
import { ChatHistoryContainer } from './components'
import { ComponentProps } from 'core/block/Component'

export class Chats extends Component<HTMLDivElement, ComponentProps> {
    constructor(props: ComponentProps) {
        const ChatHistory = new ChatHistoryContainer()

        super(
            'main',
            {
                ...props,
                className: 'chats-page',
            },
            {
                root: [new ChatsAside(), ChatHistory.createBlock()],
            },
        )
    }

    componentDidMount(): void {
        const [Aside] = this.children.root as Component[]

        this.props.onLoadComponent?.().then(() => {
            store.subscribe(
                (state) => {
                    Aside.setProps({
                        chats: state.chats,
                    })
                },
                ['chats'],
            )
        })
    }
}
