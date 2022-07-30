import { Button, HeaderContainer } from 'components'
import { UserContract } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { ROUTES } from 'core/router'
import { store, SET_CURRENT_USER } from 'core/store'
import { checkAuth } from 'utils/auth.utils'

interface ProfileProps extends ComponentProps {
    currentUser?: UserContract
}

export class Profile extends Component<HTMLDivElement, ProfileProps> {
    constructor(props: ProfileProps = {}) {
        const HeaderComponent = new HeaderContainer().createComponent()

        const ButtonEdit = new Button({
            path: ROUTES.PROFILE_EDIT.path,
            className: 'me-2',
            type: 'btn-secondary',
            title: 'Редактировать',
        })

        const ButtonEditPass = new Button({
            path: ROUTES.PROFILE_EDIT.path,
            type: 'btn-danger',
            title: 'Изменить пароль',
        })

        super(
            'div',
            {
                ...props,
                className: 'Profile',
            },
            {
                HeaderComponent,
                Buttons: [ButtonEdit, ButtonEditPass],
            },
        )
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
        })
    }

    public setComponentTemplate(): string {
        return `
            <div data-component="HeaderComponent"></div>

            <div class="container pt-5">
                <h1 class="text-center">${ROUTES.PROFILE.title}</h1>

                <hr />

                <div class="border p-3 mb-3 bg-light">
                    <table class="table">
                        <tr>
                            <th scope="col">Id</th>
                            <td>${this.props.currentUser?.id}</td>
                        </tr>

                        <tr>
                            <th scope="col">Логин</th>
                            <td>${this.props.currentUser?.login}</td>
                        </tr>

                        <tr>
                            <th scope="col">Имя</th>
                            <td>${this.props.currentUser?.firstName}</td>
                        </tr>

                        <tr>
                            <th scope="col">Фамилия</th>
                            <td>${this.props.currentUser?.secondName}</td>
                        </tr>

                        <tr>
                            <th scope="col">Email</th>
                            <td>${this.props.currentUser?.email}</td>
                        </tr>

                        <tr>
                            <th scope="col">Phone</th>
                            <td>${this.props.currentUser?.phone}</td>
                        </tr>
                    </table>
                </div>

                <div class="text-center" data-component="Buttons"></div>
            </div>
        `
    }
}

export class ProfileContainer {
    createComponent(): Profile {
        const component = new Profile()

        store.subscribe(
            (state) => {
                component.setProps({
                    currentUser: state.currentUser,
                })
            },
            [SET_CURRENT_USER],
        )

        return component
    }
}
