import { ACCESS_FORBIDDEN, UserContract, UsersAPI } from 'core/api'
import { Router, ROUTES } from 'core/router'
import {
    loaderOffAction,
    loaderOnAction,
    setAuthAction,
    setCurrentUserAction,
    store,
} from 'core/store'

export function getCurrentUser(): Promise<void> {
    return UsersAPI.getCurrentUser()
        .then((xhr) => {
            if (xhr.status !== 200) {
                Router.go(ROUTES.SIGNIN.path)

                throw new Error(ACCESS_FORBIDDEN)
            }

            const response: UserContract = JSON.parse(xhr.response)

            setAuthAction(true)
            setCurrentUserAction(response)
        })
        .catch(console.error)
        .finally(() => {
            loaderOffAction()
        })
}

export function checkAuth(): Promise<void> {
    if (store.value.auth) {
        return Promise.resolve()
    }

    loaderOnAction()

    return getCurrentUser()
}
