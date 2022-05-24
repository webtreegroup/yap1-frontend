import { ACCESS_FORBIDDEN, UserContract, UsersAPI } from 'core/api'
import { Router, ROUTES } from 'core/router'
import {
    loaderOffAction,
    loaderOnAction,
    setAuth,
    setCurrentUserInfoAction,
    store,
} from 'core/store'

export function checkAuth(): Promise<void> {
    if (store.value.auth) {
        return Promise.resolve()
    }

    loaderOnAction()

    return UsersAPI.getCurrentUser()
        .then((xhr) => {
            if (xhr.status !== 200) {
                Router.go(ROUTES.SIGNIN.path)

                throw new Error(ACCESS_FORBIDDEN)
            }

            const response: UserContract = JSON.parse(xhr.response)

            setAuth(true)
            setCurrentUserInfoAction(response)
        })
        .catch(console.error)
        .finally(() => {
            loaderOffAction()
        })
}
