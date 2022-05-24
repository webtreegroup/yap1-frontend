import { Router, ROUTES } from 'core/router'
import { checkAuth } from 'utils/auth.utils'
import { Home } from '.'

export class HomeContainer {
    onLoadApp(): Promise<void> {
        return checkAuth()
            .then(() => {
                Router.go(ROUTES.CHATS_NEW.path)
            })
            .catch(console.error)
    }

    createBlock(): Home {
        return new Home({
            onLoadComponent: this.onLoadApp,
        })
    }
}
