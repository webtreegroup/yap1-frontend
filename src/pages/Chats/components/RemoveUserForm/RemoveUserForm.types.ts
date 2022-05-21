import { ComponentProps } from 'App.types'

export interface IRemoveUserForm extends ComponentProps {
    onRemoveUser?: (login: string, currentChatId?: string) => void
    currentChatId?: string
}
