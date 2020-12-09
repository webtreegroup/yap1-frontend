import { IInputControl } from "./InputControl.model.js"

export const inputControlTmplRender = ({
    inputType = 'text',
    name,
    value = '',
    disabled = false,
    label
}: IInputControl): string => `
    <input type="${ inputType }" name="${ name }" id="${ name }" value="${ value }" ${ disabled ? 'disabled' : '' }>
    <label for="${ name }">${ label }</label>
`