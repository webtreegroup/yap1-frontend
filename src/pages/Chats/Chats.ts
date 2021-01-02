import { Block } from "../../core/Block.js"
import { store } from "../../core/store/store.js"
import { IChats } from "./Chats.type.js"
import { ChatHistory } from "./components/ChatHistory/ChatHistory.js"
import { ChatsAside } from "./components/ChatsAside/ChatsAside.js"

export class Chats extends Block<HTMLDivElement, IChats> {
    constructor(props: IChats){
        super(
            'main', 
            {
                ...props,
                className: 'chats-page',
            }, 
            {root: [
                new ChatsAside({ 
                    className: 'chats', 
                    chats: store.value.chats 
                }), 
                new ChatHistory()
            ]}
        )
    }

    componentDidMount(){
        const [aside] = this._children.root as Block[]

        this.props.onLoadChats().then(() => {
            store.subscribe((state) => {
                aside.setProps({
                    chats: state.chats
                })
            })
        })
    }
}
