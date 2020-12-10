import { IInputControl } from "./InputControl.types.js"

export const inputControlTmplRender = ({
    inputType = 'text',
    name,
    value = '',
    disabled,
    label,
    isTouched,
    required
}: IInputControl): string => `
    <input class="${ isTouched ? 'touched' : '' }" type="${ inputType }" name="${ name }" id="${ name }" value="${ value }" ${ disabled ? 'disabled' : '' } ${ required ? 'required' : '' }>
    <label for="${ name }">${ label }</label>
`