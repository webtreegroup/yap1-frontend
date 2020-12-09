import { IForm } from "./Form.model.js"

export const formTmplRender = ({ children = '' }: IForm): string => {
    return `
        <div data-component="children">
            ${ children }
        </div>
    `
}