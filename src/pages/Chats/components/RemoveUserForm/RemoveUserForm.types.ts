import { ComponentProps } from 'App.types'
import { IUserSearch } from 'core/api'

export interface IRemoveUserForm extends ComponentProps {
    onRemoveUser?: (request: IUserSearch, currentChatId?: string) => void
    currentChatId?: string
}
