import { HeaderContainer } from 'components/Header'
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
import { OwnChatsItem } from './OwnChatsItem'

interface OwnChatsSingleProps extends ComponentProps {
    chats?: ChatContract[]
}

export class OwnChatsSingle extends Component<
    HTMLDivElement,
    OwnChatsSingleProps
> {
    constructor(props: OwnChatsSingleProps = {}) {
        const HeaderComponent = new HeaderContainer().createBlock()

        super(
            'div',
            {
                ...props,
                className: 'OwnChatSingle',
            },
            {
                HeaderComponent,
            },
        )
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
        })
    }

    public setComponentTemplate(): string | undefined {
        const chats = this.props.chats?.map(
            (el) =>
                new OwnChatsItem({
                    id: el.id,
                    name: el.name,
                }),
        )

        this.children = {
            ...this.children,
            chats,
        }

        return `
            <div data-component="HeaderComponent"></div>

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

export class OwnChatsSingleContainer {
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

    createBlock(): OwnChatsSingle {
        const component = new OwnChatsSingle({
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
