import { CHAT_REMOVE_USER_FAIL_MESSAGE, CHAT_REMOVE_USER_SUCCESS_MESSAGE } from "../../../../core/api/api.consts.js"
import { ICurrentUserInfo } from "../../../../core/api/auth.api.js"
import { ChatUsersAPI } from "../../../../core/api/chat-users.api.js"
import { IUserSearch, UsersAPI } from "../../../../core/api/users.api.js"
import { loaderOffAction, loaderOnAction } from "../../../../core/store/actions.js"
import { store } from "../../../../core/store/store.js"
import { RemoveUserForm } from "./RemoveUserForm.js"


export class RemoveUserFormContainer {
    constructor() {
        this.onRemoveUser = this.onRemoveUser.bind(this)
    }

    onRemoveUser(request: IUserSearch, currentChatId?: number){
        loaderOnAction()

        UsersAPI.search(request).then((searchRespone) => {
            switch (searchRespone.status) {
                case 200:
                    const usersJson = JSON.parse(searchRespone.response) as ICurrentUserInfo[]
                    const users = usersJson.map(el => el.id)

                    if (!users.length || !currentChatId) {
                        alert(CHAT_REMOVE_USER_FAIL_MESSAGE)

                        break
                    }

                    return {
                        users,
                        chatId: currentChatId
                    }
                default:
                    alert(CHAT_REMOVE_USER_FAIL_MESSAGE)
            }
        })
        .then((addUserRequest) => {
            if (!addUserRequest) return

            return ChatUsersAPI.deleteUser(addUserRequest)
                .then((response) => {
                    switch (response.status) {
                        case 200:
                            alert(CHAT_REMOVE_USER_SUCCESS_MESSAGE)
                            
                            break
                        default:
                            alert(CHAT_REMOVE_USER_FAIL_MESSAGE)
                    }
                })
        })
        .finally(() => {
            loaderOffAction()
        })
    }

    createBlock() {
        const RemoveUserFormWrapped = new RemoveUserForm({
            onRemoveUser: this.onRemoveUser,
            currentChatId: store.value.currentChatId
        })

        store.subscribe((state) => {
            RemoveUserFormWrapped.setProps({
                currentChatId: state.currentChatId
            })
        })

        return RemoveUserFormWrapped
    }
}
