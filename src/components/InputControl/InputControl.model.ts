import { IComponent } from "../../App.model";

export interface IInputControl extends IComponent {
    name?: string
    label?: string
    inputType?: string
    value?: string | number
    disabled?: boolean
    isTouched?: boolean
}