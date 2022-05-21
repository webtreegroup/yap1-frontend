import { IComponent } from 'App.types'
import { UserContract, IChangeProfile } from 'core/api'

export interface IProfileEditForm extends IComponent {
    currentUserInfo?: UserContract
    onProfileChange?: (request: IChangeProfile) => void
}
