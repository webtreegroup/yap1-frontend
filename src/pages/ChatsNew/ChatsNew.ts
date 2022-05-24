import { Header } from 'components/Header'
import { ChatAPI, ChatContract } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { SET_CHATS, setChatsAction, store } from 'core/store'
import { checkAuth } from 'utils/auth.utils'
import { ChatGroup } from './ChatGroup'

interface ChatsNewProps extends ComponentProps {
    chats?: ChatContract[]
}

export class ChatsNew extends Component<HTMLDivElement, ChatsNewProps> {
    constructor(props: ChatsNewProps = {}) {
        const HeaderComponent = new Header()

        super(
            'div',
            {
                ...props,
                className: 'ChatsNew',
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
                new ChatGroup({
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
                <h1 class="text-center">Чаты</h1>

                <hr />

                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group" data-component="chats"></ul>
                    </div>

                    <div class="col-sm-8">
                        <div class="border p-3 bg-light text-center">
                            <h5 class="m-0">Выберите чат</h5>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export class ChatsNewContainer {
    loadChats(): void {
        ChatAPI.getAll()
            .then((xhr) => {
                const response: ChatContract[] = JSON.parse(xhr.response)

                setChatsAction(response)
            })
            .catch(console.error)
    }

    createBlock(): ChatsNew {
        const component = new ChatsNew({
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
