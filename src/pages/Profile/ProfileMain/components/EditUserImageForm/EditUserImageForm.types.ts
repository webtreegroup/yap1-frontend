import { IComponent } from "../../../../../App.types.js";

export interface IEditUserImageForm extends IComponent {
    onUserImageChange: (request: FormData) => void
}