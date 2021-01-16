import { IComponent } from 'App.types'
import { IUserSearch } from 'core/api'

export interface IRemoveUserForm extends IComponent {
    onRemoveUser?: (request: IUserSearch, currentChatId?: number) => void
    currentChatId?: number
}
