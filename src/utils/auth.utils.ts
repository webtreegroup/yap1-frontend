import { ACCESS_FORBIDDEN, UsersAPI } from 'core/api'
import { Router, ROUTES } from 'core/router'
import { loaderOffAction, loaderOnAction } from 'core/store'

export function checkAuth(): Promise<void> {
    loaderOnAction()

    return UsersAPI.getCurrentUser()
        .then((xhr) => {
            if (xhr.status === 200) {
                Router.go(ROUTES.CHATS.path)
            }

            Router.go(ROUTES.SIGNIN.path)

            throw new Error(ACCESS_FORBIDDEN)
        })
        .finally(() => {
            loaderOffAction()
        })
}
