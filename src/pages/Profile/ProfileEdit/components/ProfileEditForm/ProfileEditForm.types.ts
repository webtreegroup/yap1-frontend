import { IComponent } from 'App.types'
import { ICurrentUserInfo, IChangeProfile } from 'core/api'

export interface IProfileEditForm extends IComponent {
    currentUserInfo?: ICurrentUserInfo
    onProfileChange?: (request: IChangeProfile) => void
}
