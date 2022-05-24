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
        super('div', {
            ...props,
            className: 'ChatsNew',
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
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">

                        <a class="navbar-brand" href="#"><- чатик -></a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Главная</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Чаты</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Пользователи</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Личный кабинет</a>
                                </li>
                            </ul>

                            <div class="d-flex">
                                <a class="nav-link text-white" href="#">Текущий юзер</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

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
