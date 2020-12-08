import { IForm } from "./Form.model"

export const formTmplRender = ({ children = '' }: IForm): string => {
    return `
        <div class="children-node-target">
            ${ children }
        </div>
    `
}