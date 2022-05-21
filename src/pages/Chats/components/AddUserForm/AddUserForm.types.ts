import { ComponentProps } from 'App.types'

export interface AddUserFormProps extends ComponentProps {
    onAddUser?: (login: string, currentChatId?: string) => void
    currentChatId?: string
}
