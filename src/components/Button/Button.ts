import './Button.scss'

import { Block } from '../../core/block/Block'
import { IButton } from './Button.types'
import { buttonTmplRender } from './Button.tmpl'

export class Button extends Block<HTMLButtonElement> {
    constructor(props: IButton) {
        super('button', props)
    }

    createResources({ className = 'btn_primary', btnType = 'button' }: IButton): void {
        this._element?.classList.add('btn', className)
        this._element?.setAttribute('type', btnType)
    }

    render(): string {
        return buttonTmplRender(this.props)
    }
}
