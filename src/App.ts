import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Router, ROUTES } from 'core/router'
import {
    ErrorPage,
    ChatsContainer,
    ChatsSingleContainer,
    Messaging,
    MessagingSingleContainer,
    UsersContainer,
    UsersSingleContainer,
    SignInContainer,
    ProfileContainer,
    ProfileEditContainer,
    SignUpContainer,
} from 'pages'
import { Component } from 'core/block'
import { AppNotification } from 'components'

Router.use(ROUTES.HOME.path, Messaging)
    .use(`${ROUTES.MESSSAGING.path}/.+`, MessagingSingleContainer)
    .use(`${ROUTES.MESSSAGING.path}`, Messaging)
    .use(`${ROUTES.CHATS.path}/.+`, ChatsSingleContainer)
    .use(ROUTES.CHATS.path, ChatsContainer)
    .use(ROUTES.USERS.path, UsersContainer)
    .use(`${ROUTES.USERS.path}/.+`, UsersSingleContainer)
    .use(ROUTES.PROFILE_EDIT.path, ProfileEditContainer)
    .use(ROUTES.PROFILE.path, ProfileContainer)
    .use(ROUTES.SIGNIN.path, SignInContainer)
    .use(ROUTES.SIGNUP.path, SignUpContainer)
    .use('/.*', ErrorPage)
    .start()

const NotificationComponent = new AppNotification()

const NotificationContainer = new Component(
    'div',
    {
        className: [
            'toast-container',
            'position-fixed',
            'bottom-0',
            'end-0',
            'p-3',
        ],
    },
    {
        NotificationComponent,
    },
)

NotificationContainer.show('.app')
