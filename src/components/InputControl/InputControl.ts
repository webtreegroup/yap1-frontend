import { Block } from "../../core/block/Block.js"
import { IValidationFn } from "../../utils/form.utils.js"
import { IInputControl } from "./InputControl.types.js"
import { inputControlTmplRender } from "./InputControl.tmpl.js"

export class InputControl extends Block<HTMLInputElement> {
    constructor(props: IInputControl) {
        super("div", props)

        this.handleControlChangeOrFocus = this.handleControlChangeOrFocus.bind(this)
        this.handleControlBlur = this.handleControlBlur.bind(this)
        this.handleValidate = this.handleValidate.bind(this)

        this._element?.querySelector('input')?.addEventListener('focus', this.handleControlChangeOrFocus)
        this._element?.querySelector('input')?.addEventListener('input', this.handleControlChangeOrFocus)
        this._element?.querySelector('input')?.addEventListener('blur', this.handleControlBlur)
    }

    handleValidate(elem: HTMLInputElement, value: string) {
        if (!this.props.validationFn) return
        const validationResults: boolean[] = this.props.validationFn.map(
            (fn: IValidationFn) => fn(value)
        )

        if (validationResults.some(result => result === false))
            elem.classList.add('error')
        else 
            elem.classList.remove('error')
    }

    handleControlBlur(e: Event) {
        const elem = e.target as HTMLInputElement
        const currentValue = elem?.value

        this.handleValidate(elem, currentValue)
    }

    handleControlChangeOrFocus(e: Event) {
        const elem = e.target as HTMLInputElement
        const currentValue = elem?.value
    
        if (currentValue) {
            elem.classList.add('touched')
        } else {
            elem.classList.remove('touched')
        }

        this.handleValidate(elem, currentValue)
    }

    createResources({ isTouched }: IInputControl) {
        this._element?.classList.add('input-control')
        if (isTouched) this._element?.querySelector('input')?.classList.add('touched')
    }

    render() {
        return inputControlTmplRender(this.props)
    }
}
