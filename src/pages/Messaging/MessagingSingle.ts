import { HeaderContainer } from 'components/Header'
import { ChatAPI, ChatContract } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { ROUTES } from 'core/router'
import {
    SET_CHATS,
    setChatsAction,
    store,
    setCurrentChatAction,
} from 'core/store'
import { getUrlParam } from 'utils'
import { checkAuth } from 'utils/auth.utils'
import { MessagingItem } from './MessagingItem'

interface MessagingSingleProps extends ComponentProps {
    chats?: ChatContract[]
}

export class MessagingSingle extends Component<
    HTMLDivElement,
    MessagingSingleProps
> {
    constructor(props: MessagingSingleProps = {}) {
        const HeaderComponent = new HeaderContainer().createBlock()

        super(
            'div',
            {
                ...props,
                className: 'MessagingSingle',
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
                new MessagingItem({
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
                <h1 class="text-center">${ROUTES.MESSSAGING.title}</h1>
                
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

export class MessagingSingleContainer {
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

    createBlock(): MessagingSingle {
        const component = new MessagingSingle({
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
