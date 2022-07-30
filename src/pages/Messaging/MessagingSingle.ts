import { HeaderContainer, Modal } from 'components'
import {
    ChatAPI,
    ChatContract,
    ChatFormContract,
    ChatUsersContract,
    UserContract,
} from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { eventEmitter, EVENTS } from 'core/helpers'
import { MESSAGES } from 'core/local'
import { ROUTES } from 'core/router'
import {
    SET_CHATS,
    store,
    setCurrentChatAction,
    SET_CURRENT_CHAT,
    setCurrentChatUsersAction,
    SET_CURRENT_CHAT_USERS,
} from 'core/store'
import { formDataToObj, getResponseBody, getUrlParam } from 'utils'
import { checkAuth } from 'utils/auth.utils'
import { ChatForm } from './components'
import { ChatsSidebarContainer } from './components/ChatsSidebar'
import { validateBody } from './components/ChatsSidebar/ChatsSidebar.utils'

interface MessagingSingleProps extends ComponentProps {
    getSingleChat?: () => Promise<void>
    currentChat?: ChatContract
    currentChatUsers?: UserContract[]
}

export class MessagingSingle extends Component<
    HTMLDivElement,
    MessagingSingleProps
> {
    constructor(props: MessagingSingleProps = {}) {
        const HeaderComponent = new HeaderContainer().createComponent()
        const ChatsSidebarComponent =
            new ChatsSidebarContainer().createComponent()

        super(
            'div',
            {
                ...props,
                className: 'MessagingSingle',
            },
            {
                HeaderComponent,
                ChatsSidebarComponent,
            },
        )
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
            this.props.getSingleChat?.()
        })
    }

    public setComponentTemplate(): string {
        const AddUserFormComponent = new ChatForm({
            onSubmit: (formData) => {
                const body = formDataToObj<ChatFormContract>(formData)

                if (!validateBody(body)) return

                console.log(body, this.props.currentChat)

                eventEmitter.emit(EVENTS.NOTIFICATION_SHOW, {
                    title: MESSAGES.CHAT_ADD_USER_SUCCESS,
                })
            },
        })

        const AddUser = new Modal(
            {
                id: 'AddUser',
                modalTitle: 'Добавить пользователя в чат',
            },
            {
                body: AddUserFormComponent,
            },
        )

        this.children = {
            ...this.children,
            modals: [AddUser],
        }

        const users = this.props.currentChatUsers
            ?.map((el) => el.login)
            .join(', ')

        return `
            <div data-component="HeaderComponent"></div>

            <div class="container pt-5">
                <h1 class="text-center">${ROUTES.MESSSAGING.title} / ${
            this.props.currentChat?.name || ''
        }</h1>
                
                <hr />

                <div class="row">
                    <div class="col-sm-4" data-component="ChatsSidebarComponent"></div>

                    <div class="col-sm-8">
                        <div class="border p-3 mb-3 bg-light messages-box">
                            <hr />

                            <div>
                                <span>Пользователи чата: ${users}</span>

                                <div>
                                    <a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#AddUser">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                        </svg>
                                        добавить
                                    </a>

                                    <a href="#" class="text-decoration-none link-danger" data-bs-toggle="modal" data-bs-target="#AddUser">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                        </svg>
                                        удалить
                                    </a>  
                                </div>
                            </div>
                        </div>

                        <div class="border p-3 bg-light">
                            <form class="text-center">
                                <div class="mb-3">
                                    <label for="message" class="form-label">Сообщение</label>
                                    <textarea class="form-control" id="message" name="message" rows="3"></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export class MessagingSingleContainer {
    async getSingleChat(): Promise<void> {
        try {
            const chatId = getUrlParam('chatId')

            if (!chatId) return

            const chatXhr = await ChatAPI.getById(chatId)
            const chatResponse = getResponseBody<ChatContract>(chatXhr.response)

            const usersXhr = await ChatAPI.getChatUsers(chatId)
            const usersResponse = getResponseBody<ChatUsersContract>(
                usersXhr.response,
            )

            setCurrentChatAction(chatResponse)
            setCurrentChatUsersAction(usersResponse.users)
        } catch (error) {
            console.error(error)
        }
    }

    createComponent(): MessagingSingle {
        const component = new MessagingSingle({
            getSingleChat: this.getSingleChat,
        })

        store.subscribe(
            (state) => {
                component.setProps({
                    currentChat: state.currentChat,
                    currentChatUsers: state.currentChatUsers,
                })
            },
            [SET_CHATS, SET_CURRENT_CHAT, SET_CURRENT_CHAT_USERS],
        )

        return component
    }
}
