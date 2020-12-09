import { IButton } from "./Button.model.js"

export const buttonTmplRender = ({
    text = 'Кнопка',
    children = ''
}: IButton): string => `${text}${children}`