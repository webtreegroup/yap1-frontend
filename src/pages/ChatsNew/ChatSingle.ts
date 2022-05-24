import { ChatAPI, ChatContract } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import {
    SET_CHATS,
    setChatsAction,
    store,
    setCurrentChatAction,
} from 'core/store'
import { getUrlParam } from 'utils'
import { checkAuth } from 'utils/auth.utils'
import { ChatGroup } from './ChatGroup'

interface ChatSingleProps extends ComponentProps {
    chats?: ChatContract[]
}

export class ChatSingle extends Component<HTMLDivElement, ChatSingleProps> {
    constructor(props: ChatSingleProps = {}) {
        super('div', {
            ...props,
            className: 'ChatSingle',
        })
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
        })
    }

    public setComponentTemplate(): string | undefined {
        const chats = this.props.chats?.map(
            (el) =>
                new ChatGroup({
                    id: el.id,
                    name: el.name,
                }),
        )

        this.children = {
            chats,
        }

        return `
            <div class="container pt-5">
                <h1 class="text-center">Чат</h1>
                
                <hr />

                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group" data-component="chats"></ul>
                    </div>

                    <div class="col-sm-8">
                        <div class="border p-3 bg-light text-center">
                            <h5 class="m-0">Конкретный чат</h5>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export class ChatSingleContainer {
    loadChats(): void {
        ChatAPI.getAll()
            .then((xhr) => {
                const response: ChatContract[] = JSON.parse(xhr.response)

                setChatsAction(response)
            })
            .catch(console.error)
    }

    setCurrentChat(): void {
        const chatId = getUrlParam('chatId')

        if (!chatId) return

        setCurrentChatAction(chatId)
    }

    createBlock(): ChatSingle {
        const component = new ChatSingle({
            onLoadComponent: async () => {
                this.loadChats()
                this.setCurrentChat()
            },
        })

        store.subscribe(
            (state) => {
                component.setProps({
                    chats: state.chats,
                })
            },
            [SET_CHATS],
        )

        return component
    }
}
