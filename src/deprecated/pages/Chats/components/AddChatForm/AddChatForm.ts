import { AddChatContract } from 'core/api'
import { Button, Form, InputControl } from 'components'
import { ADD_CHAT_FORM_CONTROLS } from './AddChatForm.config'
import { addChatFormTmplRender } from './AddChatForm.tmpl'
import { IAddChatForm } from './AddChatForm.types'

export class AddChatForm extends Form<IAddChatForm> {
    constructor(props?: IAddChatForm) {
        const controls = ADD_CHAT_FORM_CONTROLS.map(
            (el) => new InputControl(el),
        )
        const BtnSubmit = new Button({ text: 'Добавить', btnType: 'submit' })

        super(props, {
            root: [...controls, BtnSubmit],
        })
    }

    onSubmit(request: AddChatContract): void {
        this.props.onAddChat?.(request)
    }

    setComponentTemplate(): string {
        return addChatFormTmplRender()
    }
}
