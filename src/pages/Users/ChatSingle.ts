import { HeaderContainer } from 'components/Header'
import { UserContract, UsersAPI } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { store, SET_USERS, setUsersAction } from 'core/store'
import { checkAuth } from 'utils/auth.utils'
import { UsersItem } from './UsersItem'

interface UsersProps extends ComponentProps {
    users?: UserContract[]
}

export class UsersSingle extends Component<HTMLDivElement, UsersProps> {
    constructor(props: UsersProps = {}) {
        const HeaderComponent = new HeaderContainer().createBlock()

        super(
            'div',
            {
                ...props,
                className: 'UsersSingle',
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
        const users = this.props.users?.map((el) => new UsersItem(el))

        this.children = {
            ...this.children,
            users,
        }

        return `
            <div data-component="HeaderComponent"></div>

            <div class="container pt-5">
                <h1 class="text-center">Чат</h1>
                
                <hr />

                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group" data-component="users"></ul>
                    </div>

                    <div class="col-sm-8">
                        <div class="border p-3 bg-light text-center">
                            <h5 class="m-0">Конкретный пользователь</h5>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export class UsersSingleContainer {
    loadUsers(): void {
        UsersAPI.getAll()
            .then((xhr) => {
                const response: UserContract[] = JSON.parse(xhr.response)

                setUsersAction(response)
            })
            .catch(console.error)
    }

    createBlock(): UsersSingle {
        const component = new UsersSingle({
            onLoadComponent: async () => {
                this.loadUsers()
            },
        })

        store.subscribe(
            (state) => {
                component.setProps({
                    users: state.users,
                })
            },
            [SET_USERS],
        )

        return component
    }
}
