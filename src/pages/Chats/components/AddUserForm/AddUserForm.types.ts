import { IUserSearch } from 'core/api'
import { IComponent } from 'App.types'

export interface IAddUserForm extends IComponent {
    onAddUser?: (request: IUserSearch, currentChatId?: string) => void
    currentChatId?: string
}
