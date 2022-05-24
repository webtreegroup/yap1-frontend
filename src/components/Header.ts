import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component.types'

export interface HeaderProps extends ComponentProps {
    title?: string
    path?: string
    onClick?: () => void
}

export class Header extends Component<HTMLLinkElement> {
    constructor(props: HeaderProps = {}) {
        super('div', {
            ...props,
            className: 'Header',
        })
    }

    public setComponentTemplate(): string | undefined {
        return `
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">

                        <a class="navbar-brand" href="#"><- чатик -></a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Главная</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Чаты</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Пользователи</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Личный кабинет</a>
                                </li>
                            </ul>

                            <div class="d-flex">
                                <a class="nav-link text-white" href="#">Текущий юзер</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        `
    }
}
