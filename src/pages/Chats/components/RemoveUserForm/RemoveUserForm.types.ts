import { IComponent } from 'App.types'
import { IUserSearch } from 'core/api'

export interface IRemoveUserForm extends IComponent {
    onRemoveUser?: (request: IUserSearch, currentChatId?: string) => void
    currentChatId?: string
}
