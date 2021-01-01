import { IComponent } from "../../../../../App.types.js";
import { IChangePassword } from "../../../../../core/api/profile.api.js"

export interface IProfileEditPass extends IComponent {
    onProfilePasswordChange: (request: IChangePassword) => void
}