import { ComponentProps } from 'App.types'

export interface InputControlProps extends ComponentProps {
    name?: string
    label?: string
    inputType?: string
    value?: string | number
    disabled?: boolean
    required?: boolean
    isTouched?: boolean
    validationFn?: ((value?: string) => boolean)[]
}
