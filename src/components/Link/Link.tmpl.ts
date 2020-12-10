import { ILink } from "./Link.model.js"

export const linkTmplRender = ({
    text = 'Ссылка',
}: ILink): string => `${text}`