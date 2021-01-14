import { IAddChat } from 'core/api'
import { Button } from '../../../../components/Button/Button'
import { Form } from '../../../../components/Form/Form'
import { InputControl } from '../../../../components/InputControl/InputControl'
import { ADD_CHAT_FORM_CONTROLS } from './AddChatForm.config'
import { addChatFormTmplRender } from './AddChatForm.tmpl'
import { IAddChatForm } from './AddChatForm.types'

export class AddChatForm extends Form<IAddChatForm> {
    constructor(props?: IAddChatForm) {
        const controls = ADD_CHAT_FORM_CONTROLS.map((el) => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Добавить', btnType: 'submit' })

        super(
            props,
            {
                root: [...controls, BtnSubmit],
            },
        )
    }

    onSubmit(request: IAddChat): void {
        this.props.onAddChat?.(request)
    }

    render(): string {
        return addChatFormTmplRender()
    }
}
