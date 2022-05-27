import { Link, Modal } from 'components'
import { HeaderContainer } from 'components/Header'
import { ChatContract, UserChatsContract, UsersAPI } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { ROUTES } from 'core/router'
import {
    store,
    setCurrentUserChatsAction,
    SET_CURRENT_USER_CHATS,
} from 'core/store'
import { checkAuth } from 'utils/auth.utils'
import { MessagingItem } from './MessagingItem'

interface MessagingProps extends ComponentProps {
    chats?: ChatContract[]
}

export class Messaging extends Component<HTMLDivElement, MessagingProps> {
    constructor(props: MessagingProps = {}) {
        const HeaderComponent = new HeaderContainer().createBlock()

        const testLink = new Link({ title: 'test' })
        const ModalTest = new Modal(
            {
                id: 'testModal',
                modalTitle: 'Добавить пользователя',
            },
            {
                body: testLink,
            },
        )

        super(
            'div',
            {
                ...props,
                className: 'Messaging',
            },
            {
                HeaderComponent,
                ModalTest,
            },
        )
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
        })
    }

    public setComponentTemplate(): string | undefined {
        const chats = this.props.chats?.map((el) => new MessagingItem(el))

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
                        <ul class="list-group mb-3" data-component="chats"></ul>

                        <a href="#" class="text-decoration-none d-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                            </svg>
                            добавить чат
                        </a>

                        <a href="#" class="text-decoration-none link-danger d-block mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                            </svg>
                            удалить чат
                        </a>

                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testModal">
                            Launch demo modal
                        </button>
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

export class MessagingContainer {
    loadChats(): void {
        UsersAPI.getUserChats(store.value.currentUser.id)
            .then((xhr) => {
                const response: UserChatsContract = JSON.parse(xhr.response)

                setCurrentUserChatsAction(response.chats)
            })
            .catch(console.error)
    }

    createBlock(): Messaging {
        const component = new Messaging({
            onLoadComponent: async () => {
                this.loadChats()
            },
        })

        store.subscribe(
            (state) => {
                component.setProps({
                    chats: state.currentUserChats,
                })
            },
            [SET_CURRENT_USER_CHATS],
        )

        return component
    }
}
