import { IState } from "../../App.types.js"
import { Block, IBaseTemplateRender, IBlockChildren } from "../../core/block/Block.js"
import { escapeHtml } from "../../utils/common.utils.js"

export class Form<PropsType extends object> extends Block<HTMLFormElement, PropsType> {
    constructor(props?: PropsType, children?: IBlockChildren, baseTmplRender?: IBaseTemplateRender){
        super("form", props, children, baseTmplRender)
        
        this._onSubmit = this._onSubmit.bind(this)

        this._element?.addEventListener('submit', this._onSubmit)
    }

    onSubmit(request: IState, formData?: FormData){
        console.log(request, formData)
    }

    _onSubmit(e: Event) {
        e.preventDefault()
        
        const request: IState = {}
        const fieldsWithErrors = this._element?.querySelectorAll('input.error + label')
        const errors: string[] = []
        
        fieldsWithErrors?.forEach((label) => {
            errors.push(label.innerHTML)
        })

        if (fieldsWithErrors?.length) {
            alert(`Следующие поля заполнены не правильно: ${errors.join(', ').toLowerCase()}.\nПроверьте форму еще раз...`)

            return
        }

        const formData = new FormData(this._element as HTMLFormElement)

        for(const [key, value] of formData.entries()) {
            request[key] = escapeHtml(value)
        }

        this.onSubmit(request, formData)
    }
}