import {
    CHAT_ADD_USER_FAIL_MESSAGE,
    CHAT_ADD_USER_SUCCESS_MESSAGE,
    ICurrentUserInfo,
    ChatUsersAPI,
    IUserSearch,
    UsersAPI,
} from 'core/api'
import { loaderOffAction, loaderOnAction, store } from 'core/store'
import { AddUserForm } from './AddUserForm'

export class AddUserFormContainer {
    constructor() {
        this.onAddUser = this.onAddUser.bind(this)
    }

    onAddUser(request: IUserSearch, currentChatId?: number): void {
        loaderOnAction()

        UsersAPI.search(request).then((searchRespone) => {
            switch (searchRespone.status) {
            case 200: {
                const usersJson = JSON.parse(searchRespone.response) as ICurrentUserInfo[]
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

                return ChatUsersAPI.addUser(addUserRequest)
                    .then((response) => {
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
        const AddUserFormWrapped = new AddUserForm({
            onAddUser: this.onAddUser,
            currentChatId: store.value.currentChatId,
        })

        store.subscribe((state) => {
            AddUserFormWrapped.setProps({
                currentChatId: state.currentChatId,
            })
        })

        return AddUserFormWrapped
    }
}
