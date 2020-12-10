import { ILink } from "./Link.types.js"

export const linkTmplRender = ({
    text = 'Ссылка',
}: ILink): string => `${text}`