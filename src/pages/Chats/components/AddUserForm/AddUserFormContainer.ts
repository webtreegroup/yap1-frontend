import { CHAT_ADD_USER_FAIL_MESSAGE, CHAT_ADD_USER_SUCCESS_MESSAGE } from "../../../../core/api/api.consts.js"
import { ICurrentUserInfo } from "../../../../core/api/auth.api.js"
import { ChatUsersAPI } from "../../../../core/api/chat-users.api.js"
import { IUserSearch, UsersAPI } from "../../../../core/api/users.api.js"
import { Router } from "../../../../core/router/Router.js"
import { loaderOffAction, loaderOnAction } from "../../../../core/store/actions.js"
import { AddUserForm } from "./AddUserForm.js"


export class AddUserFormContainer {
    constructor() {
        this.onAddUser = this.onAddUser.bind(this)
    }

    onAddUser(request: IUserSearch){
        loaderOnAction()

        UsersAPI.search(request).then((searchRespone) => {
            switch (searchRespone.status) {
                case 200:
                    const usersJson = JSON.parse(searchRespone.response) as ICurrentUserInfo[]
                    const users = usersJson.map(el => el.id)

                    if (!users.length) {
                        alert(CHAT_ADD_USER_FAIL_MESSAGE)

                        break
                    }

                    return {
                        users,
                        chatId: 0
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
                            Router.reload()
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

    createBlock() {
        return new AddUserForm({
            onAddUser: this.onAddUser
        })
    }
}
