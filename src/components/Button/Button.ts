import './Button.scss'

import { Block } from 'core/block'
import { ButtonProps } from './Button.types'
import { buttonTmplRender } from './Button.tmpl'

export class Button extends Block<HTMLButtonElement> {
    constructor(props: ButtonProps) {
        super('button', props)
    }

    createResources({
        className = 'btn_primary',
        btnType = 'button',
    }: ButtonProps): void {
        this.element?.classList.add('btn', className)
        this.element?.setAttribute('type', btnType)
    }

    setHtmlTemplate(): string {
        return buttonTmplRender(this.props)
    }
}
