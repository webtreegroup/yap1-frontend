import { IComponent } from "../../../../../App.types.js"
import { ICurrentUserInfo } from "../../../../../core/api/auth.api.js"
import { IChangeProfile } from "../../../../../core/api/profile.api.js"

export interface IProfileEditForm extends IComponent {
    currentUserInfo?: ICurrentUserInfo
    onProfileChange?: (request: IChangeProfile) => void
}