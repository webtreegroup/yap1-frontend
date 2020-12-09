import { IInputControl } from "./InputControl.model.js"

export const inputControlTmplRender = ({
    inputType = 'text',
    name,
    value = '',
    disabled,
    label,
    isTouched
}: IInputControl): string => `
    <input class="${ isTouched ? 'touched' : '' }" type="${ inputType }" name="${ name }" id="${ name }" value="${ value }" ${ disabled ? 'disabled' : '' }>
    <label for="${ name }">${ label }</label>
`