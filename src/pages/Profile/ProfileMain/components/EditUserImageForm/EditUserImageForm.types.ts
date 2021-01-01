import { IChangeProfileAvatar } from "../../../../../core/api/profile.api.js"

export interface IEditUserImageForm {
    onUserImageChange: (request: IChangeProfileAvatar) => void
}