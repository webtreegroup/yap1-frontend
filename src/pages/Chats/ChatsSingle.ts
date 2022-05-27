import { HeaderContainer } from 'components/Header'
import { ChatAPI, ChatContract } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { ROUTES } from 'core/router'
import { SET_CHATS, setChatsAction, store } from 'core/store'
import { getUrlParam } from 'utils'
import { checkAuth } from 'utils/auth.utils'
import { ChatsItem } from './ChatsItem'

interface ChatsSingleProps extends ComponentProps {
    chats?: ChatContract[]
    getSingleChat?: () => Promise<void | ChatContract>
}

export class ChatsSingle extends Component<
    HTMLDivElement,
    ChatsSingleProps,
    ChatContract
> {
    constructor(props: ChatsSingleProps = {}) {
        const HeaderComponent = new HeaderContainer().createBlock()

        super(
            'div',
            {
                ...props,
                className: 'ChatSingle',
            },
            {
                HeaderComponent,
            },
        )
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
            this.props.getSingleChat?.().then((chat) => {
                if (chat) {
                    this.setState(chat)
                }
            })
        })
    }

    public setComponentTemplate(): string {
        const chats = this.props.chats?.map((el) => new ChatsItem(el))

        this.children = {
            ...this.children,
            chats,
        }

        return `
            <div data-component="HeaderComponent"></div>

            <div class="container pt-5">
                <h1 class="text-center">${ROUTES.CHATS.title} / ${
            this.state?.name || ''
        }</h1>
                
                <hr />

                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group mb-3" data-component="chats"></ul>
                    </div>

                    <div class="col-sm-8">
                        <div class="border p-3 bg-light">
                            <table class="table">
                                <tr>
                                    <th scope="col">Id</th>
                                    <td>${this.state.id}</td>
                                </tr>

                                <tr>
                                    <th scope="col">Владелец</th>
                                    <td>${this.state.ownerId}</td>
                                </tr>

                                <tr>
                                    <th scope="col">Имя</th>
                                    <td>${this.state.name}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export class ChatsSingleContainer {
    getChats(): void {
        ChatAPI.getAll()
            .then((xhr) => {
                const response: ChatContract[] = JSON.parse(xhr.response)

                setChatsAction(response)
            })
            .catch(console.error)
    }

    getSingleChat(): Promise<void | ChatContract> {
        const chatId = getUrlParam('chatId')

        if (!chatId) return Promise.reject()

        return ChatAPI.getById(chatId)
            .then((xhr) => {
                const response: ChatContract = JSON.parse(xhr.response)

                return response
            })
            .catch(console.error)
    }

    createBlock(): ChatsSingle {
        const component = new ChatsSingle({
            onLoadComponent: async () => {
                this.getChats()
            },
            getSingleChat: this.getSingleChat,
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
