import { UserContract } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { ROUTES } from 'core/router'
import { SET_CURRENT_USER, store } from 'core/store'
import { logout } from 'utils'
import { Link } from '../Link'

export interface HeaderProps extends ComponentProps {
    currentUser?: UserContract
}

export class Header extends Component<HTMLLinkElement, HeaderProps> {
    constructor(props: HeaderProps = {}) {
        const BrandLink = new Link({
            title: '<-- чатик -->',
            path: ROUTES.HOME.path,
            className: 'navbar-brand',
        })
        const ChatsLink = new Link({
            ...ROUTES.CHATS,
            className: 'nav-link',
        })
        const UsersLink = new Link({ ...ROUTES.USERS, className: 'nav-link' })
        const ProfileLink = new Link({
            ...ROUTES.PROFILE,
            className: 'nav-link',
        })
        const LogoutLink = new Link({
            title: 'Выход',
            className: 'nav-link',
            onClick: logout,
        })

        super(
            'div',
            {
                ...props,
                className: 'Header',
            },
            {
                BrandLink,
                ChatsLink,
                UsersLink,
                ProfileLink,
                LogoutLink,
            },
        )
    }

    public setComponentTemplate(): string {
        const userName = `${this.props.currentUser?.firstName} ${this.props.currentUser?.secondName}`

        const UserLink = new Link({
            path: ROUTES.PROFILE.path,
            title: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                ${userName}
            `,
            className: ['nav-link', 'text-light'],
        })

        this.children = {
            ...this.children,
            UserLink,
        }

        return `
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">

                        <span data-component="BrandLink"></span>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item" data-component="ChatsLink"></li>

                                <li class="nav-item" data-component="UsersLink"></li>

                                <li class="nav-item" data-component="ProfileLink"></li>

                                <li class="nav-item" data-component="LogoutLink"></li>
                            </ul>

                            <div class="d-flex" data-component="UserLink"></div>
                        </div>
                    </div>
                </nav>
            </header>
        `
    }
}

export class HeaderContainer {
    createBlock(): Header {
        const component = new Header()

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
