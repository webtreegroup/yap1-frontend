import { IUserSearch } from 'core/api'
import { IComponent } from 'App.types'

export interface IAddUserForm extends IComponent {
    onAddUser?: (request: IUserSearch, currentChatId?: number) => void
    currentChatId?: number
}
