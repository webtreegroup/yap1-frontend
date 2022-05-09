import { Link, Loader, Popup } from 'components'
import { Block } from 'core/block'
import { ROUTES } from 'core/router'
import { AddChatFormContainer } from '../AddChatForm/AddChatFormContainer'
import { ChatGroup } from '../ChatGroup/ChatGroup'
import { chatsAsideTmplRender } from './ChatsAside.tmpl'
import { IChatsAside } from './ChatsAside.types'

export class ChatsAside extends Block<HTMLDivElement, IChatsAside> {
    constructor(props?: IChatsAside) {
        const ProfileLink = new Link({
            path: ROUTES.PROFILE.path,
            title: `
                ${ROUTES.PROFILE.title}
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002"><g><g><path fill="#999999" d="M388.425 241.951 151.609 5.79c-7.759-7.733-20.321-7.72-28.067.04-7.74 7.759-7.72 20.328.04 28.067l222.72 222.105L123.574 478.106c-7.759 7.74-7.779 20.301-.04 28.061 3.883 3.89 8.97 5.835 14.057 5.835 5.074.0 10.141-1.932 14.017-5.795l236.817-236.155c3.737-3.718 5.834-8.778 5.834-14.05S392.156 245.676 388.425 241.951z" stroke="#f0f0f0" /></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
            `,
        })

        const LoaderComponent = new Loader()

        const AddChatForm = new AddChatFormContainer()

        const AddChatPopup = new Popup(
            {
                title: 'Добавить чат',
                isClosable: true,
            },
            {
                root: [AddChatForm.createBlock()],
            },
        )

        const AddChatPopupToggle = new Link({
            onClick: () => {
                AddChatPopup.show()
            },
            title: `
                <svg height="16px" viewBox="0 0 512 512" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="m256 512C114.835938 512 0 397.164062.0 256S114.835938.0 256 0s256 114.835938 256 256-114.835938 256-256 256zm0-480C132.480469 32 32 132.480469 32 256s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/><path d="m368 272H144c-8.832031.0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031.0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m256 384c-8.832031.0-16-7.167969-16-16V144c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0"/></svg>
                Добавить чат
            `,
            className: 'chats__add-button',
        })

        super('aside', props, {
            ProfileLink,
            LoaderComponent,
            AddChatPopup,
            AddChatPopupToggle,
        })
    }

    render(): string {
        const chats = this.props.chats.map(
            (el) =>
                new ChatGroup({
                    id: el.id,
                    name: el.name,
                }),
        )

        this._children = {
            ...this._children,
            chats,
        }

        return chatsAsideTmplRender()
    }
}
