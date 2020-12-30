import { IBaseTemplateRender } from "../../core/Block.js"
import { ILoader } from "./Loader.types.js"

export const loaderTmplRender: IBaseTemplateRender<ILoader> = 
    (props) => `<div>Loader... ${props}</div>`