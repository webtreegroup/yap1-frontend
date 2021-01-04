import { Block } from "../../core/block/Block.js"
import { store } from "../../core/store/store.js"
import { MESSAGES } from "./Chats.consts.js"
import { IChats } from "./Chats.type.js"
import { ChatHistory } from "./components/ChatHistory/ChatHistory.js"
import { ChatsAside } from "./components/ChatsAside/ChatsAside.js"

/**
 * TODO: когда очередь дойдет до интеграции с остальными частями АПИ
 * функционал будет доработан, сейчас в качестве заглушки дублирует `Chats`, 
 * с небольшими отличиями
 */ 
export class ChatSingle extends Block<HTMLDivElement> {
    constructor(props: IChats){
        super(
            'main', 
            {
                ...props,
                className: 'chats-page',
            }, 
            {
                root: [
                    new ChatsAside({ className: 'chats', chats: store.value.chats }), 
                    new ChatHistory({ messages: MESSAGES })
                ]
            }
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
