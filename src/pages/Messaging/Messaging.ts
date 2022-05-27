import { ChatsSidebarContainer } from 'pages/Messaging/ChatsSidebar'
import { HeaderContainer } from 'components/Header'

import { Component } from 'core/block'
import { ROUTES } from 'core/router'

export class Messaging extends Component<HTMLDivElement> {
    constructor() {
        const HeaderComponent = new HeaderContainer().createBlock()
        const ChatsSidebarComponent = new ChatsSidebarContainer().createBlock()

        super(
            'div',
            {
                className: 'Messaging',
            },
            {
                HeaderComponent,
                ChatsSidebarComponent,
            },
        )
    }

    public setComponentTemplate(): string {
        return `
            <div data-component="HeaderComponent"></div>

            <div class="container pt-5">
                <h1 class="text-center">${ROUTES.MESSSAGING.title}</h1>

                <hr />

                <div class="row">
                    <div class="col-sm-4" data-component="ChatsSidebarComponent"></div>

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
