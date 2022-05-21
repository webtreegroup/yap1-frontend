import { InputControlProps } from './InputControl.types'

export const inputControlTmplRender = ({
    inputType = 'text',
    name,
    value = '',
    disabled,
    label,
    isTouched,
    required,
}: InputControlProps): string => `
    <input class="${
        isTouched ? 'touched' : ''
    }" type="${inputType}" name="${name}" id="${name}" value="${value}" ${
    disabled ? 'disabled' : ''
} ${required ? 'required' : ''}>
    <label for="${name}">${label}</label>
`
