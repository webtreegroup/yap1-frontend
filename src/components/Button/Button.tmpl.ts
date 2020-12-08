import { IButton } from "./Button.model"

export const buttonTmplRender = ({
    text = 'Кнопка',
    children
}: IButton): string => `${text}${children}`