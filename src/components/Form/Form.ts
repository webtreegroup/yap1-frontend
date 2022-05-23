import {
    Component,
    BaseTemplateRenderProps,
    BlockChildrenProps,
} from 'core/block'
import { escapeHtml } from 'utils'
import { StoreType } from 'App.types'

export class Form<PropsType extends object> extends Component<
    HTMLFormElement,
    PropsType
> {
    constructor(
        props?: PropsType,
        children?: BlockChildrenProps,
        baseTmplRender?: BaseTemplateRenderProps,
    ) {
        super('form', props, children, baseTmplRender)

        this._onSubmit = this._onSubmit.bind(this)

        this.element?.addEventListener('submit', this._onSubmit)
    }

    onSubmit(request: StoreType, formData?: FormData): void {
        console.log(request, formData)
    }

    _onSubmit(e: Event): void {
        e.preventDefault()

        const request: StoreType = {}
        const fieldsWithErrors = this.element?.querySelectorAll(
            'input.error + label',
        )
        const errors: string[] = []

        fieldsWithErrors?.forEach((label) => {
            errors.push(label.innerHTML)
        })

        if (fieldsWithErrors?.length) {
            const errorsStr = errors.join(', ').toLowerCase()
            alert(
                `Следующие поля заполнены не правильно: ${errorsStr}.\nПроверьте форму еще раз...`,
            )

            return
        }

        const formData = new FormData(this.element as HTMLFormElement)

        for (const [key, value] of formData.entries()) {
            request[key] = escapeHtml(value)
        }

        this.onSubmit(request, formData)
    }
}
