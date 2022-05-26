import { HeaderContainer } from 'components/Header'
import { ChatContract, UserChatsContract, UsersAPI } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { ROUTES } from 'core/router'
import {
    store,
    setCurrentUserChatsAction,
    SET_CURRENT_USER_CHATS,
} from 'core/store'
import { checkAuth } from 'utils/auth.utils'
import { OwnChatsItem } from './OwnChatsItem'

interface OwnChatsProps extends ComponentProps {
    chats?: ChatContract[]
}

export class OwnChats extends Component<HTMLDivElement, OwnChatsProps> {
    constructor(props: OwnChatsProps = {}) {
        const HeaderComponent = new HeaderContainer().createBlock()

        super(
            'div',
            {
                ...props,
                className: 'OwnChats',
            },
            {
                HeaderComponent,
            },
        )
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
        })
    }

    public setComponentTemplate(): string | undefined {
        const chats = this.props.chats?.map(
            (el) =>
                new OwnChatsItem({
                    id: el.id,
                    name: el.name,
                }),
        )

        this.children = {
            ...this.children,
            chats,
        }

        return `
            <div data-component="HeaderComponent"></div>

            <div class="container pt-5">
                <h1 class="text-center">${ROUTES.MESSSAGING.title}</h1>

                <hr />

                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group" data-component="chats"></ul>
                    </div>

                    <div class="col-sm-8">
                        <div class="border p-3 bg-light text-center">
                            <div>Выберите чат</h5>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export class OwnChatsContainer {
    loadChats(): void {
        UsersAPI.getUserChats(store.value.currentUser.id)
            .then((xhr) => {
                const response: UserChatsContract = JSON.parse(xhr.response)

                setCurrentUserChatsAction(response.chats)
            })
            .catch(console.error)
    }

    createBlock(): OwnChats {
        const component = new OwnChats({
            onLoadComponent: async () => {
                this.loadChats()
            },
        })

        store.subscribe(
            (state) => {
                component.setProps({
                    chats: state.currentUserChats,
                })
            },
            [SET_CURRENT_USER_CHATS],
        )

        return component
    }
}
