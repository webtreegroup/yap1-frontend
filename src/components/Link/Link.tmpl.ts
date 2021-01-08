import { IBaseTemplateRender } from "../../core/block/Block"
import { ILink } from "./Link.types"

export const linkTmplRender: IBaseTemplateRender<ILink> = 
    (props) => `${props?.title || 'Ссылка'}`