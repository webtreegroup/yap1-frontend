import { IButton } from "./Button.types.js"

export const buttonTmplRender = ({
    text = 'Кнопка',
    children = ''
}: IButton): string => `${text}${children}`