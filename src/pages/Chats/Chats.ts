import { HeaderContainer } from 'components/Header'
import { ChatAPI, ChatContract } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { ROUTES } from 'core/router'
import { SET_CHATS, setChatsAction, store } from 'core/store'
import { checkAuth } from 'utils/auth.utils'
import { ChatsItem } from './ChatsItem'

interface ChatsProps extends ComponentProps {
    chats?: ChatContract[]
}

export class Chats extends Component<HTMLDivElement, ChatsProps> {
    constructor(props: ChatsProps = {}) {
        const HeaderComponent = new HeaderContainer().createBlock()

        super(
            'div',
            {
                ...props,
                className: 'OwnChats',
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
                new ChatsItem({
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
                <h1 class="text-center">${ROUTES.CHATS.title}</h1>

                <hr />

                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group" data-component="chats"></ul>
                    </div>

                    <div class="col-sm-8">
                        <div class="border p-3 bg-light text-center">
                            <div>Выберите чат</h5>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export class ChatsContainer {
    loadChats(): void {
        ChatAPI.getAll()
            .then((xhr) => {
                const response: ChatContract[] = JSON.parse(xhr.response)

                setChatsAction(response)
            })
            .catch(console.error)
    }

    createBlock(): Chats {
        const component = new Chats({
            onLoadComponent: async () => {
                this.loadChats()
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
