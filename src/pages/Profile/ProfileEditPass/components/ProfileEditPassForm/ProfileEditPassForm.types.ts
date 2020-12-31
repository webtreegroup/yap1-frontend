import { IChangePassword } from "../../../../../core/api/profile.api"

export interface IProfileEditPass {
    onProfilePasswordChange: (request: IChangePassword) => void
}