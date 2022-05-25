import { HeaderContainer } from 'components/Header'
import { UserContract, UsersAPI } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'
import { store, SET_USERS, setUsersAction } from 'core/store'
import { getUrlParam } from 'utils'
import { checkAuth } from 'utils/auth.utils'
import { UsersItem } from './UsersItem'

interface UsersProps extends ComponentProps {
    users?: UserContract[]
    getSingleUser?: () => Promise<void | UserContract>
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
            this.props.getSingleUser?.().then((user) => {
                this.setState({
                    user,
                })
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
                <h1 class="text-center">Пользователь: ${
                    this.state.user?.login || ''
                }</h1>
                
                <hr />

                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-group" data-component="users"></ul>
                    </div>

                    <div class="col-sm-8">
                        <div class="border p-3 bg-light text-center">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                </tbody>
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
