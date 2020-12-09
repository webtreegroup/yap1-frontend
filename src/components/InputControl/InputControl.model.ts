import { IComponent } from "../../App.model";

export interface IInputControl extends IComponent {
    name?: string
    label?: string
    inputType?: string
    value?: string
    disabled?: boolean
    required?: boolean
    isTouched?: boolean
    validationFn?: ((value?: string) => boolean)[]
}