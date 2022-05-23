import { ComponentProps } from 'core/block/Component.types'
import { UserContract, IChangeProfile } from 'core/api'

export interface IProfileEditForm extends ComponentProps {
    currentUserInfo?: UserContract
    onProfileChange?: (request: IChangeProfile) => void
}
