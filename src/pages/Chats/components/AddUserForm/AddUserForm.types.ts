import { IComponent } from "../../../../App.types.js"
import { IUserSearch } from "../../../../core/api/users.api.js"

export interface IAddUserForm extends IComponent {
    onAddUser?: (request: IUserSearch, currentChatId?: number) => void
    currentChatId?: number
}