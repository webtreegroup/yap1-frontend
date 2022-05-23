import { ComponentProps } from 'core/block/Component.types'

export interface AddUserFormProps extends ComponentProps {
    onAddUser?: (login: string, currentChatId?: string) => void
}
