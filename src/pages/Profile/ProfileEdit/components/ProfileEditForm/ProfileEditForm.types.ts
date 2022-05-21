import { ComponentProps } from 'App.types'
import { UserContract, IChangeProfile } from 'core/api'

export interface IProfileEditForm extends ComponentProps {
    currentUserInfo?: UserContract
    onProfileChange?: (request: IChangeProfile) => void
}
