import { IState } from "../../App.types.js"
import { Block, IBaseTemplateRender } from "../../core/Block.js"
import { IForm } from "./Form.types.js"

export class Form extends Block<HTMLFormElement> {
    constructor(props?: IForm, children?: Block[], baseTmplRender?: IBaseTemplateRender){
        super("form", props, children, baseTmplRender)
        
        this.handleSubmit = this.handleSubmit.bind(this)

        this._element?.addEventListener('submit', this.handleSubmit)
    }

    handleSubmit(e: Event) {
        e.preventDefault()
        
        const requestForConsole: IState = {}
        const fieldsWithErrors = this._element?.querySelectorAll('input.error')
        
        if (fieldsWithErrors?.length) {
            alert('Поля заполнены не правильно, проверьте форму еще раз...')

            return
        }

        const formData = new FormData(this._element as HTMLFormElement)

        for(const [key, value] of formData.entries()) {
            requestForConsole[key] = value
        }

        console.log(requestForConsole)
    }
}