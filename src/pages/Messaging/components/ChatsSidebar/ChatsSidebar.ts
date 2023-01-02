import { Modal } from 'components'

import {
    ChatAPI,
    ChatContract,
    ChatFormContract,
    UserChatsContract,
    UsersAPI,
} from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { eventEmitter, EVENTS } from 'core/helpers'
import { MESSAGES } from 'core/local'

import {
    store,
    setCurrentUserChatsAction,
    SET_CURRENT_USER_CHATS,
} from 'core/store'
import { formDataToObj, getResponseBody } from 'utils'
import { checkAuth } from 'utils/auth.utils'
import { ChatForm } from '../ChatForm'
import { ChatsSidebarItem } from './ChatsSidebarItem'

interface ChatsSidebarProps extends ComponentProps {
    chats?: ChatContract[]
}

export class ChatsSidebar extends Component<HTMLDivElement, ChatsSidebarProps> {
    constructor(props: ChatsSidebarProps = {}) {
        const AddChatFormComponent = new ChatForm({
            onSubmit: (formData) => {
                const body = formDataToObj<ChatFormContract>(formData)

                ChatAPI.create(body).then((response) => {
                    const responseBody = getResponseBody(response.response)

                    switch (response.status) {
                        case 200:
                            this.props.onLoadComponent?.()

                            eventEmitter.emit(EVENTS.NOTIFICATION_SHOW, {
                                title: MESSAGES.CHAT_ADD_SUCCESS,
                                bgColor: 'success',
                            })

                            break
                        default:
                            eventEmitter.emit(EVENTS.NOTIFICATION_SHOW, {
                                title: responseBody.message,
                                bgColor: 'danger',
                            })
                    }
                })
            },
        })

        const DeleteChatFormComponent = new ChatForm({
            onSubmit: (formData) => {
                const body = formDataToObj<ChatFormContract>(formData)

                ChatAPI.delete(body).then((response) => {
                    const responseBody = getResponseBody(response.response)

                    switch (response.status) {
                        case 200:
                            this.props.onLoadComponent?.()

                            eventEmitter.emit(EVENTS.NOTIFICATION_SHOW, {
                                title: MESSAGES.CHAT_REMOVE_SUCCESS,
                                bgColor: 'success',
                            })

                            break
                        default:
                            eventEmitter.emit(EVENTS.NOTIFICATION_SHOW, {
                                title: responseBody.message,
                                bgColor: 'danger',
                            })
                    }
                })
            },
        })

        const AddChat = new Modal(
            {
                id: 'AddChat',
                modalTitle: 'Добавить чат',
            },
            {
                body: AddChatFormComponent,
            },
        )

        const DeleteChat = new Modal(
            {
                id: 'DeleteChat',
                modalTitle: 'Удалить чат',
            },
            {
                body: DeleteChatFormComponent,
            },
        )

        super(
            'div',
            {
                ...props,
                className: 'ChatsSidebar',
            },
            {
                AddChat,
                DeleteChat,
            },
        )
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
        })
    }

    public setComponentTemplate(): string {
        const chats = this.props.chats?.map((el) => new ChatsSidebarItem(el))

        this.children = {
            ...this.children,
            chats,
        }

        return `
            <ul class="list-group mb-3" data-component="chats"></ul>

            <a href="#" class="text-decoration-none d-block" data-bs-toggle="modal" data-bs-target="#AddChat">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
                добавить чат
            </a>

            <a href="#" class="text-decoration-none link-danger d-block mb-3" data-bs-toggle="modal" data-bs-target="#DeleteChat">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                </svg>
                удалить чат
            </a>
        `
    }
}

export class ChatsSidebarContainer {
    loadChats(): void {
        if (!store.value.currentUser.id) return

        UsersAPI.getUserChats(store.value.currentUser.id)
            .then((xhr) => {
                const response: UserChatsContract = JSON.parse(xhr.response)

                setCurrentUserChatsAction(response.chats)
            })
            .catch(console.error)
    }

    createComponent(): ChatsSidebar {
        const component = new ChatsSidebar({
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
