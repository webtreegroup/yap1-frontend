import './Chats.scss'

import { Block } from '../../core/block/Block'
import { store } from '../../core/store/store'
import { IChats } from './Chats.type'
import { ChatHistory } from './components/ChatHistory/ChatHistory'
import { ChatsAside } from './components/ChatsAside/ChatsAside'

export class Chats extends Block<HTMLDivElement, IChats> {
    constructor(props: IChats) {
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
                    new ChatHistory(),
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
