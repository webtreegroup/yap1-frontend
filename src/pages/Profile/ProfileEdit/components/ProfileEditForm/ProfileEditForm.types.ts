import { IChangeProfile } from "../../../../../core/api/profile.api.js"

export interface IProfileEditForm {
    onProfileChange: (request: IChangeProfile) => void
}