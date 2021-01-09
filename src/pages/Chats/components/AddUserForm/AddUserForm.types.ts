import { IComponent } from '../../../../App.types'
import { IUserSearch } from '../../../../core/api/users.api'

export interface IAddUserForm extends IComponent {
    onAddUser?: (request: IUserSearch, currentChatId?: number) => void
    currentChatId?: number
}
