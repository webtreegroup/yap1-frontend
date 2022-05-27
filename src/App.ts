import { Router, ROUTES } from 'core/router'
import {
    ErrorPage,
    Signin,
    Signup,
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
    .use(ROUTES.SIGNIN.path, Signin)
    .use(ROUTES.SIGNUP.path, Signup)
    .use('/.*', ErrorPage)
    .start()
