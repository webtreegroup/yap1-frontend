import './InputControl.scss'

import { Block } from 'core/block'
import { IValidationFn } from 'utils'
import { IInputControl } from './InputControl.types'
import { inputControlTmplRender } from './InputControl.tmpl'

export class InputControl extends Block<HTMLInputElement> {
    _inputElement: HTMLInputElement | null | undefined

    constructor(props: IInputControl) {
        super('div', props)

        this.handleControlChangeOrFocus = this.handleControlChangeOrFocus.bind(this)
        this.handleControlBlur = this.handleControlBlur.bind(this)
        this.handleValidate = this.handleValidate.bind(this)

        this._inputElement = this._element?.querySelector('input')

        this._inputElement?.addEventListener('focus', this.handleControlChangeOrFocus)
        this._inputElement?.addEventListener('input', this.handleControlChangeOrFocus)
        this._inputElement?.addEventListener('blur', this.handleControlBlur)
    }

    handleValidate(elem: HTMLInputElement, value: string): void {
        if (!this.props.validationFn) return
        const validationResults: boolean[] = this.props.validationFn.map(
            (fn: IValidationFn) => fn(value),
        )

        if (validationResults.some((result) => result === false)) elem.classList.add('error')
        else { elem.classList.remove('error') }
    }

    handleControlBlur(e: Event): void {
        const elem = e.target as HTMLInputElement
        const currentValue = elem?.value

        this.handleValidate(elem, currentValue)
    }

    handleControlChangeOrFocus(e: Event): void {
        const elem = e.target as HTMLInputElement
        const currentValue = elem?.value

        if (currentValue) {
            elem.classList.add('touched')
        } else {
            elem.classList.remove('touched')
        }

        this.handleValidate(elem, currentValue)
    }

    createResources({ isTouched }: IInputControl): void {
        this._element?.classList.add('input-control')
        if (isTouched) this._inputElement?.classList.add('touched')
    }

    render(): string {
        return inputControlTmplRender(this.props)
    }
}
