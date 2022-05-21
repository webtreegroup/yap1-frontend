import {
    ChatUsersAPI,
    UserContract,
    IUserSearch,
    UsersAPI,
    CHAT_REMOVE_USER_FAIL_MESSAGE,
    CHAT_REMOVE_USER_SUCCESS_MESSAGE,
} from 'core/api'
import { store, loaderOffAction, loaderOnAction } from 'core/store'
import { RemoveUserForm } from './RemoveUserForm'

export class RemoveUserFormContainer {
    constructor() {
        this.onRemoveUser = this.onRemoveUser.bind(this)
    }

    onRemoveUser(request: IUserSearch, currentChatId?: string): void {
        loaderOnAction()

        UsersAPI.search(request)
            .then((searchRespone) => {
                switch (searchRespone.status) {
                    case 200: {
                        const usersJson = JSON.parse(
                            searchRespone.response,
                        ) as UserContract[]
                        const users = usersJson.map((el) => el.id)

                        if (!users.length || !currentChatId) {
                            alert(CHAT_REMOVE_USER_FAIL_MESSAGE)

                            break
                        }

                        return {
                            users,
                            chatId: currentChatId,
                        }
                    }
                    default:
                        alert(CHAT_REMOVE_USER_FAIL_MESSAGE)
                }
            })
            .then((addUserRequest) => {
                if (!addUserRequest) return

                return ChatUsersAPI.deleteUser(addUserRequest).then(
                    (response) => {
                        switch (response.status) {
                            case 200:
                                alert(CHAT_REMOVE_USER_SUCCESS_MESSAGE)

                                break
                            default:
                                alert(CHAT_REMOVE_USER_FAIL_MESSAGE)
                        }
                    },
                )
            })
            .finally(() => {
                loaderOffAction()
            })
    }

    createBlock(): RemoveUserForm {
        const RemoveUserFormWrapped = new RemoveUserForm({
            onRemoveUser: this.onRemoveUser,
            currentChatId: store.value.currentChatId,
        })

        store.subscribe((state) => {
            RemoveUserFormWrapped.setProps({
                currentChatId: state.currentChatId,
            })
        }, [])

        return RemoveUserFormWrapped
    }
}
