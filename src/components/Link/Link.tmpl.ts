import { IBaseTemplateRender } from "../../core/block/Block.js"
import { ILink } from "./Link.types.js"

export const linkTmplRender: IBaseTemplateRender<ILink> = 
    (props) => `${props?.title || 'Ссылка'}`