import { IState } from '../../App.types'
import { Block, IBaseTemplateRender, IBlockChildren } from '../../core/block/Block'
import { escapeHtml } from '../../utils/common.utils'

export class Form<PropsType extends object> extends Block<HTMLFormElement, PropsType> {
    constructor(props?: PropsType, children?: IBlockChildren, baseTmplRender?: IBaseTemplateRender) {
        super('form', props, children, baseTmplRender)

        this._onSubmit = this._onSubmit.bind(this)

        this._element?.addEventListener('submit', this._onSubmit)
    }

    onSubmit(request: IState, formData?: FormData): void {
        console.log(request, formData)
    }

    _onSubmit(e: Event): void {
        e.preventDefault()

        const request: IState = {}
        const fieldsWithErrors = this._element?.querySelectorAll('input.error + label')
        const errors: string[] = []

        fieldsWithErrors?.forEach((label) => {
            errors.push(label.innerHTML)
        })

        if (fieldsWithErrors?.length) {
            const errorsStr = errors.join(', ').toLowerCase()
            alert(`Следующие поля заполнены не правильно: ${errorsStr}.\nПроверьте форму еще раз...`)

            return
        }

        const formData = new FormData(this._element as HTMLFormElement)

        for (const [key, value] of formData.entries()) {
            request[key] = escapeHtml(value)
        }

        this.onSubmit(request, formData)
    }
}
