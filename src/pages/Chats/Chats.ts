import { Block } from "../../core/Block.js"
import { store } from "../../core/store/store.js"
import { IChats } from "./Chats.type.js"
import { ChatHistory } from "./components/ChatHistory/ChatHistory.js"
import { ChatsAside } from "./components/ChatsAside/ChatsAside.js"

export class Chats extends Block<HTMLDivElement> {
    constructor(props?: IChats){
        super(
            'main', 
            {
                ...props,
                className: 'chats-page',
            }, 
            [
                new ChatsAside({ className: 'chats', chats: store.value.chats }), 
                new ChatHistory()
            ]
        )
    }

    componentDidMount(){
        this.props?.onLoadChats()
    }
}
