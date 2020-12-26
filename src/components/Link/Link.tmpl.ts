import { IBaseTemplateRender } from "../../core/Block.js"
import { ILink } from "./Link.types.js"

export const linkTmplRender: IBaseTemplateRender<ILink> = 
    (props) => `${props?.text || 'Ссылка'}`