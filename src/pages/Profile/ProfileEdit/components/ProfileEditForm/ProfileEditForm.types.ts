import { IComponent } from "../../../../../App.types.js";
import { IChangeProfile } from "../../../../../core/api/profile.api.js"

export interface IProfileEditForm extends IComponent {
    onProfileChange: (request: IChangeProfile) => void
}