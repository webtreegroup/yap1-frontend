import { IUserSearch } from 'core/api'
import { ComponentProps } from 'App.types'

export interface IAddUserForm extends ComponentProps {
    onAddUser?: (request: IUserSearch, currentChatId?: string) => void
    currentChatId?: string
}
