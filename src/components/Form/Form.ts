import { IState } from "../../App.types.js"
import { Block, IBaseTemplateRender, IBlockChildren } from "../../core/Block.js"
import { store } from "../../core/store/store.js"
import { IForm } from "./Form.types.js"

export class Form extends Block<HTMLFormElement> {
    constructor(props?: IForm, children?: IBlockChildren | Block[], baseTmplRender?: IBaseTemplateRender){
        super("form", props, children, baseTmplRender)
        
        this._onSubmit = this._onSubmit.bind(this)

        this._element?.addEventListener('submit', this._onSubmit)

        store.subscribe(() => {
            this.setProps(store.value.loader)
        })
    }

    onSubmit(request: IState){
        console.log(request)
    }

    _onSubmit(e: Event) {
        e.preventDefault()
        
        const request: IState = {}
        const fieldsWithErrors = this._element?.querySelectorAll('input.error')
        
        if (fieldsWithErrors?.length) {
            alert('Поля заполнены не правильно, проверьте форму еще раз...')

            return
        }

        const formData = new FormData(this._element as HTMLFormElement)

        for(const [key, value] of formData.entries()) {
            request[key] = value
        }

        this.onSubmit(request)
    }
}