import { ComponentProps } from 'core/block/Component'

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
