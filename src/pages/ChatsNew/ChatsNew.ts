import { ChatAPI, IChat } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { SET_CHATS, setChatsAction, store } from 'core/store'
import { checkAuth } from 'utils/auth.utils'
import { ChatGroup } from './components/ChatGroup'

interface ChatsNewProps extends ComponentProps {
    chats?: IChat[]
}

export class ChatsNew extends Component<HTMLDivElement, ChatsNewProps> {
    constructor(props: ChatsNewProps = {}) {
        super('div', {
            ...props,
            className: 'ChatsNew',
        })
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
        })
    }

    public setComponentTemplate(): string | undefined {
        const chats = this.props.chats?.map(
            (el) =>
                new ChatGroup({
                    id: el.id,
                    name: el.name,
                }),
        )

        console.log(this.props.chats)
        console.log(chats)

        return `
            <div class="container pt-5">
                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                        </ul>
                    </div>

                    <div class="col-sm-8">
                        <h3>Выберите чат</h3>
                    </div>
                </div>
            </div>
        `
    }
}

export class ChatsNewContainer {
    loadChats(): void {
        ChatAPI.getAll()
            .then((xhr) => {
                const response: IChat[] = JSON.parse(xhr.response)

                setChatsAction(response)
            })
            .catch(console.error)
    }

    createBlock(): ChatsNew {
        const component = new ChatsNew({
            onLoadComponent: async () => {
                this.loadChats()
            },
        })

        store.subscribe(
            (state) => {
                component.setProps({
                    chats: state.chats,
                })
            },
            [SET_CHATS],
        )

        return component
    }
}
