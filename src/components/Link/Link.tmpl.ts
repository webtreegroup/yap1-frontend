import { BaseTemplateRenderProps } from 'core/block'
import { LinkProps } from './Link.types'

export const linkTmplRender: BaseTemplateRenderProps<LinkProps> = (props) =>
    `${props?.title || 'Ссылка'}`
