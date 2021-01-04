import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { ADD_CHAT_FORM_CONTROLS } from "./AddChatForm.config.js"
import { addChatFormTmplRender } from "./AddChatForm.tmpl.js"
import { IAddChatForm } from "./AddChatForm.types.js"
import { IAddChat } from "../../../../core/api/chat.api.js"

export class AddChatForm extends Form<IAddChatForm> {
    constructor(props?: IAddChatForm){
        const controls = ADD_CHAT_FORM_CONTROLS.map(el => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Добавить', btnType: 'submit' })

        super(
            props, 
            { 
                root: [...controls, BtnSubmit],
            }
        )
    }

    onSubmit(request: IAddChat){
        this.props.onAddChat?.(request)
    }

    render() {
        return addChatFormTmplRender()
    }
}