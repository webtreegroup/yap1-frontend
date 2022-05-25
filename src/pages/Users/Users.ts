import { HeaderContainer } from 'components/Header'
import { UserContract, UsersAPI } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { store, setUsersAction, SET_USERS } from 'core/store'
import { checkAuth } from 'utils/auth.utils'
import { UsersItem } from './UsersItem'

interface UsersProps extends ComponentProps {
    users?: UserContract[]
}

export class Users extends Component<HTMLDivElement, UsersProps> {
    constructor(props: UsersProps = {}) {
        const HeaderComponent = new HeaderContainer().createBlock()

        super(
            'div',
            {
                ...props,
                className: 'Users',
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
                <h1 class="text-center">Пользователи</h1>

                <hr />

                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group" data-component="users"></ul>
                    </div>

                    <div class="col-sm-8">
                        <div class="border p-3 bg-light text-center">
                            <div>Выберите пользователя</h5>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export class UsersContainer {
    loadUsers(): void {
        UsersAPI.getAll()
            .then((xhr) => {
                const response: UserContract[] = JSON.parse(xhr.response)

                setUsersAction(response)
            })
            .catch(console.error)
    }

    createBlock(): Users {
        const component = new Users({
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