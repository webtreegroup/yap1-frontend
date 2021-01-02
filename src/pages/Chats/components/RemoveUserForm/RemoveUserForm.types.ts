import { IComponent } from "../../../../App.types.js"
import { IUserSearch } from "../../../../core/api/users.api.js"

export interface IRemoveUserForm extends IComponent {
    onRemoveUser?: (request: IUserSearch, currentChatId?: number) => void
    currentChatId?: number
}