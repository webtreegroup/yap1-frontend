import { IComponent } from "../../App.types";

export interface IInputControl extends IComponent {
    name?: string
    label?: string
    inputType?: string
    value?: string | number
    disabled?: boolean
    required?: boolean
    isTouched?: boolean
    validationFn?: ((value?: string) => boolean)[]
}