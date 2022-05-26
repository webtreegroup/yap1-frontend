import { HeaderContainer } from 'components/Header'
import { UserContract, UsersAPI } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { ROUTES } from 'core/router'
import { store, SET_USERS, setUsersAction } from 'core/store'
import { getUrlParam } from 'utils'
import { checkAuth } from 'utils/auth.utils'
import { UsersItem } from './UsersItem'

interface UsersProps extends ComponentProps {
    users?: UserContract[]
    getSingleUser?: () => Promise<void | UserContract>
}

export class UsersSingle extends Component<
    HTMLDivElement,
    UsersProps,
    UserContract
> {
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
            this.props.getSingleUser?.().then((user) => {
                if (user) {
                    this.setState(user)
                }
            })
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
                <h1 class="text-center">${ROUTES.USERS.title} / ${
            this.state?.login || ''
        }</h1>
                
                <hr />

                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group" data-component="users"></ul>
                    </div>

                    <div class="col-sm-8">
                        <div class="border p-3 bg-light">
                            <table class="table">
                                <tr>
                                    <th scope="col">Id</th>
                                    <td>${this.state.id}</td>
                                </tr>

                                <tr>
                                    <th scope="col">Логин</th>
                                    <td>${this.state.login}</td>
                                </tr>

                                <tr>
                                    <th scope="col">Имя</th>
                                    <td>${this.state.firstName}</td>
                                </tr>

                                <tr>
                                    <th scope="col">Фамилия</th>
                                    <td>${this.state.secondName}</td>
                                </tr>

                                <tr>
                                    <th scope="col">Email</th>
                                    <td>${this.state.email}</td>
                                </tr>

                                <tr>
                                    <th scope="col">Phone</th>
                                    <td>${this.state.phone}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export class UsersSingleContainer {
    getUsers(): void {
        UsersAPI.getAll()
            .then((xhr) => {
                const response: UserContract[] = JSON.parse(xhr.response)

                setUsersAction(response)
            })
            .catch(console.error)
    }

    getSingleUser(): Promise<void | UserContract> {
        const userId = getUrlParam('userId')

        if (!userId) return Promise.reject()

        return UsersAPI.getById(userId)
            .then((xhr) => {
                const response: UserContract = JSON.parse(xhr.response)

                return response
            })
            .catch(console.error)
    }

    createBlock(): UsersSingle {
        const component = new UsersSingle({
            onLoadComponent: async () => {
                this.getUsers()
            },
            getSingleUser: this.getSingleUser,
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
