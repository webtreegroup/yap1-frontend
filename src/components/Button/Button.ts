import './Button.scss'

import { Component } from 'core/block'
import { ButtonProps } from './Button.types'
import { buttonTmplRender } from './Button.tmpl'
import { addclassNames } from 'utils'

export class Button extends Component<HTMLButtonElement> {
    constructor(props: ButtonProps) {
        super('button', props)
    }

    createResources({
        className = 'btn_primary',
        btnType = 'button',
    }: ButtonProps): void {
        this.element?.classList.add('btn')
        addclassNames(this.element, className)
        this.element?.setAttribute('type', btnType)
    }

    componentShouldRender(): string {
        return buttonTmplRender(this.props)
    }
}
