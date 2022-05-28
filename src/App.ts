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
    ProfileContainer,
} from 'pages'

Router.use(ROUTES.HOME.path, Messaging)
    .use(`${ROUTES.MESSSAGING.path}/.+`, MessagingSingleContainer)
    .use(`${ROUTES.MESSSAGING.path}`, Messaging)
    .use(`${ROUTES.CHATS.path}/.+`, ChatsSingleContainer)
    .use(ROUTES.CHATS.path, ChatsContainer)
    .use(ROUTES.USERS.path, UsersContainer)
    .use(`${ROUTES.USERS.path}/.+`, UsersSingleContainer)
    .use(ROUTES.PROFILE_EDIT.path, ErrorPage)
    .use(ROUTES.PROFILE.path, ProfileContainer)
    .use(ROUTES.SIGNIN.path, ErrorPage)
    .use(ROUTES.SIGNUP.path, ErrorPage)
    .use('/.*', ErrorPage)
    .start()
