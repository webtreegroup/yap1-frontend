import { CHAT_ADD_USER_FAIL_MESSAGE, CHAT_ADD_USER_SUCCESS_MESSAGE } from "../../../../core/api/api.consts.js";
import { ChatUsersAPI } from "../../../../core/api/chat-users.api.js";
import { UsersAPI } from "../../../../core/api/users.api.js";
import { loaderOffAction, loaderOnAction } from "../../../../core/store/actions.js";
import { store } from "../../../../core/store/store.js";
import { AddUserForm } from "./AddUserForm.js";
export class AddUserFormContainer {
    constructor() {
        this.onAddUser = this.onAddUser.bind(this);
    }
    onAddUser(request, currentChatId) {
        loaderOnAction();
        UsersAPI.search(request).then((searchRespone) => {
            switch (searchRespone.status) {
                case 200:
                    const usersJson = JSON.parse(searchRespone.response);
                    const users = usersJson.map(el => el.id);
                    if (!users.length || !currentChatId) {
                        alert(CHAT_ADD_USER_FAIL_MESSAGE);
                        break;
                    }
                    return {
                        users,
                        chatId: currentChatId
                    };
                default:
                    alert(CHAT_ADD_USER_FAIL_MESSAGE);
            }
        })
            .then((addUserRequest) => {
            if (!addUserRequest)
                return;
            return ChatUsersAPI.addUser(addUserRequest)
                .then((response) => {
                switch (response.status) {
                    case 200:
                        alert(CHAT_ADD_USER_SUCCESS_MESSAGE);
                        break;
                    default:
                        alert(CHAT_ADD_USER_FAIL_MESSAGE);
                }
            });
        })
            .finally(() => {
            loaderOffAction();
        });
    }
    createBlock() {
        const AddUserFormWrapped = new AddUserForm({
            onAddUser: this.onAddUser,
            currentChatId: store.value.currentChatId
        });
        store.subscribe((state) => {
            AddUserFormWrapped.setProps({
                currentChatId: state.currentChatId
            });
        });
        return AddUserFormWrapped;
    }
}
//# sourceMappingURL=AddUserFormContainer.js.map