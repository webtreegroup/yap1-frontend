import {
    CHAT_ADD_USER_FAIL_MESSAGE,
    CHAT_ADD_USER_SUCCESS_MESSAGE,
    UserContract,
    ChatUsersAPI,
    UsersAPI,
} from 'core/api'
import { loaderOffAction, loaderOnAction, setUsers, store } from 'core/store'
import { AddUserForm } from './AddUserForm'

export class AddUserFormContainer {
    async onLoadUsers(): Promise<void> {
        return UsersAPI.getAll()
            .then((xhr) => {
                const response: UserContract[] = JSON.parse(xhr.response)

                setUsers(response)
            })
            .catch(console.error)
    }

    onAddUser(login: string, currentChatId?: string): void {
        loaderOnAction()

        UsersAPI.getByLogin(login)
            .then((searchRespone) => {
                switch (searchRespone.status) {
                    case 200: {
                        const usersJson = JSON.parse(
                            searchRespone.response,
                        ) as UserContract[]
                        const users = usersJson.map((el) => el.id)

                        if (!users.length || !currentChatId) {
                            alert(CHAT_ADD_USER_FAIL_MESSAGE)

                            break
                        }

                        return {
                            users,
                            chatId: currentChatId,
                        }
                    }
                    default:
                        alert(CHAT_ADD_USER_FAIL_MESSAGE)
                }
            })
            .then((addUserRequest) => {
                if (!addUserRequest) return

                return ChatUsersAPI.addUser(addUserRequest).then((response) => {
                    switch (response.status) {
                        case 200:
                            alert(CHAT_ADD_USER_SUCCESS_MESSAGE)

                            break
                        default:
                            alert(CHAT_ADD_USER_FAIL_MESSAGE)
                    }
                })
            })
            .finally(() => {
                loaderOffAction()
            })
    }

    createBlock(): AddUserForm {
        const component = new AddUserForm({
            onAddUser: this.onAddUser,
            onLoadComponent: this.onLoadUsers,
        })

        store.subscribe(() => {
            component.eventBus.emit(component.events.COMPONENT_RENDER)
        }, ['users'])

        return component
    }
}
