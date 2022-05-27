import { ComponentProps } from 'core/block/Component'

export interface AddUserFormProps extends ComponentProps {
    onAddUser?: (login: string, currentChatId?: string) => void
}
