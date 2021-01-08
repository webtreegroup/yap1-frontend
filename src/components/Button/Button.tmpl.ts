import { IButton } from "./Button.types"

export const buttonTmplRender = ({
    text = 'Кнопка',
    children = ''
}: IButton): string => `${text}${children}`