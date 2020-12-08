import { IButton } from "./Button.model"

export const buttonTmplRender = ({
    text = 'Кнопка'
}: IButton): string => text