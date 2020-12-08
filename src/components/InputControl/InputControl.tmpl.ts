import { IInputControl } from "./InputControl.model"

export const inputControlTmplRender = ({
    className,
    inputType,
    name,
    value,
    disabled,
    label
}: IInputControl): string => `
    <div class="input-control ${ className }">
        <input type="${ inputType }" name="${ name }" id="${ name }" value="${ value }" disabled="${ disabled }">
        <label for="${ name }">${ label }</label>
    </div>
`