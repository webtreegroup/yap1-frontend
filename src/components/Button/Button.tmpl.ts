import { ButtonProps } from './Button.types'

export const buttonTmplRender = ({
    text = 'Кнопка',
    children = '',
}: ButtonProps): string => `${text}${children}`
