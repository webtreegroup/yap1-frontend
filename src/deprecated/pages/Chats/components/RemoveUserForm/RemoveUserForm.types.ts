import { ComponentProps } from 'core/block/Component.types'

export interface IRemoveUserForm extends ComponentProps {
    onRemoveUser?: (login: string, currentChatId?: string) => void
    currentChatId?: string
}
