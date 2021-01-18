import { AuthAPI, FAIL_MESSAGE_DEFAULT } from 'core/api'
import { Router, ROUTES } from 'core/router'
import { loaderOffAction, loaderOnAction } from 'core/store'
import { Home } from '.'

export class HomeContainer {
    onLoadApp(): Promise<void> {
        loaderOnAction()

        return AuthAPI.getCurrentUserInfo()
            .then((xhr) => {
                if (xhr.status === 200) {
                    Router.go(ROUTES.CHATS.path)
                } else {
                    Router.go(ROUTES.SIGNIN.path)
                }
            })
            .catch(() => {
                alert(FAIL_MESSAGE_DEFAULT)
            })
            .finally(() => {
                loaderOffAction()
            })
    }

    createBlock(): Home {
        const ProfileWrapped = new Home({
            onLoadApp: this.onLoadApp,
        })

        return ProfileWrapped
    }
}
