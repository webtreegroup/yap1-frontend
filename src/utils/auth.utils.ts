import { ACCESS_FORBIDDEN, ICurrentUserInfo, UsersAPI } from 'core/api'
import { Router, ROUTES } from 'core/router'
import {
    loaderOffAction,
    loaderOnAction,
    setCurrentUserInfoAction,
} from 'core/store'

export function checkAuth(): Promise<void> {
    loaderOnAction()

    return UsersAPI.getCurrentUser()
        .then((xhr) => {
            if (xhr.status !== 200) {
                Router.go(ROUTES.SIGNIN.path)

                throw new Error(ACCESS_FORBIDDEN)
            }
        })
        .finally(() => {
            loaderOffAction()
        })
}

export function getCurrentUser(): void {
    UsersAPI.getCurrentUser()
        .then((xhr) => {
            const response: ICurrentUserInfo = JSON.parse(xhr.response)

            setCurrentUserInfoAction(response)
        })
        .catch(alert)
}
