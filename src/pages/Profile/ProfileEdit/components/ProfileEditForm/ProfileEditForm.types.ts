import { IComponent } from '../../../../../App.types'
import { ICurrentUserInfo } from '../../../../../core/api/auth.api'
import { IChangeProfile } from '../../../../../core/api/profile.api'

export interface IProfileEditForm extends IComponent {
    currentUserInfo?: ICurrentUserInfo
    onProfileChange?: (request: IChangeProfile) => void
}
