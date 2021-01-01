import { Link } from "../../../../components/Link/Link.js"
import { Block } from "../../../../core/Block.js"
import { ROUTES } from "../../../../core/router/Router.config.js"
import { ChatGroup } from "../ChatGroup/ChatGroup.js"
import { chatsAsideTmplRender } from "./ChatsAside.tmpl.js"
import { IChatsAside } from "./ChatsAside.types.js"

export class ChatsAside extends Block<HTMLDivElement, IChatsAside> {
    constructor(props?: IChatsAside){
        const ProfileLink = new Link({
            path: ROUTES.PROFILE.path,
            title: `
                ${ROUTES.PROFILE.title}
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002"><g><g><path fill="#999999" d="M388.425 241.951 151.609 5.79c-7.759-7.733-20.321-7.72-28.067.04-7.74 7.759-7.72 20.328.04 28.067l222.72 222.105L123.574 478.106c-7.759 7.74-7.779 20.301-.04 28.061 3.883 3.89 8.97 5.835 14.057 5.835 5.074.0 10.141-1.932 14.017-5.795l236.817-236.155c3.737-3.718 5.834-8.778 5.834-14.05S392.156 245.676 388.425 241.951z" stroke="#f0f0f0" /></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
            `,
        })

        super('aside', props, {
            ProfileLink
        })
    }

    render() {
        const chats = this.props.chats.map(el => new ChatGroup(el))

        this._children = {
            ...this._children,
            chats
        }

        return chatsAsideTmplRender()
    }
}