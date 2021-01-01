import { IChangePassword } from "../../../../../core/api/profile.api.js"

export interface IProfileEditPass {
    onProfilePasswordChange: (request: IChangePassword) => void
}