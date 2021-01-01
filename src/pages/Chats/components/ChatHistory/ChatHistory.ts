import { Link } from "../../../../components/Link/Link.js"
import { Popup } from "../../../../components/Popup/Popup.js"
import { Block } from "../../../../core/Block.js"
import { AddUserForm } from "../AddUserForm/AddUserForm.js"
import { ChatMessage } from "../ChatMessage/ChatMessage.js"
import { RemoveUserForm } from "../RemoveUserForm/RemoveUserForm.js"
import { IChatHistory } from "./ChatHistory.types.js"
import { chatHistoryTmplRender } from "./ChatHistory.tmpl.js"

export class ChatHistory extends Block {
    constructor(props?: IChatHistory){
        const messages = props?.messages?.map(el => new ChatMessage(el)) || []
        
        const AddUserPopup = new Popup({
            title: 'Добавить пользователя',
            isClosable: true
        }, {root: [AddUserForm]})

        const RemoveUserPopup = new Popup({
            title: 'Удалить пользователя',
            isClosable: true
        }, {root: [RemoveUserForm]})

        const ToggleAddUserPopup = new Link({ 
            onClick: () => {
                AddUserPopup.show()
            },
            title: `
                <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path fill="#3369F3" d="m256 512C114.835938 512 0 397.164062.0 256S114.835938.0 256 0s256 114.835938 256 256-114.835938 256-256 256zm0-480C132.480469 32 32 132.480469 32 256s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/><path fill="#3369F3" d="m368 272H144c-8.832031.0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031.0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path fill="#3369F3" d="m256 384c-8.832031.0-16-7.167969-16-16V144c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0"/></svg>
                Добавить пользователя
            `
        })

        const ToggleRemoveUserPopup = new Link({ 
            onClick: () => {
                RemoveUserPopup.show()
            },
            title: `
                <svg height="511.99998pt" viewBox="1 1 511.99998 511.99998" width="511.99998pt" xmlns="http://www.w3.org/2000/svg"><path fill="#3369F3" d="m256 0C114.613281.0.0 114.613281.0 256s114.613281 256 256 256 256-114.613281 256-256c-.167969-141.316406-114.683594-255.832031-256-256zm0 480C132.289062 480 32 379.710938 32 256S132.289062 32 256 32s224 100.289062 224 224c-.132812 123.65625-100.34375 223.867188-224 224zm0 0"/><path fill="#3369F3" d="m380.449219 131.550781c-6.25-6.246093-16.378907-6.246093-22.625.0L256 233.375 154.175781 131.550781c-6.140625-6.355469-16.269531-6.53125-22.625-.390625-6.355469 6.136719-6.53125 16.265625-.390625 22.621094.128906.132812.257813.265625.390625.394531L233.375 256l-101.824219 101.824219c-6.355469 6.136719-6.53125 16.265625-.390625 22.625 6.136719 6.355469 16.265625 6.53125 22.621094.390625.132812-.128906.265625-.257813.394531-.390625L256 278.625l101.824219 101.824219c6.355469 6.136719 16.484375 5.960937 22.621093-.394531 5.988282-6.199219 5.988282-16.03125.0-22.230469l-101.820312-101.824219 101.824219-101.824219c6.246093-6.246093 6.246093-16.375.0-22.625zm0 0"/></svg>
                Удалить пользователя
            `
        })
        
        super(
            'main', 
            { ...props, onAddUser: AddUserPopup.show }, 
            { 
                messages, 
                Popups: messages.length ? [AddUserPopup, RemoveUserPopup] : undefined, 
                ToggleAddUserPopup: messages.length ? ToggleAddUserPopup : undefined,
                ToggleRemoveUserPopup: messages.length ? ToggleRemoveUserPopup : undefined 
            }
        )
    }

    createResources() {
        this._element?.classList.add('chat-history', 'chat-history_not-selected')
    }

    render() {
        return chatHistoryTmplRender(this.props)
    }
}