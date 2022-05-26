import { Router, ROUTES } from 'core/router'
import { ErrorPage, Signin, Signup } from 'pages'
import { ChatsContainer } from 'pages/Chats'
import { OwnChatsContainer, OwnChatsSingleContainer } from 'pages/OwnChats'
import { UsersContainer, UsersSingleContainer } from 'pages/Users'

Router.use(ROUTES.HOME.path, OwnChatsContainer)
    .use(`${ROUTES.HOME.path}/.+`, OwnChatsSingleContainer)
    .use(ROUTES.CHATS.path, ChatsContainer)
    .use(ROUTES.USERS.path, UsersContainer)
    .use(`${ROUTES.USERS.path}/.+`, UsersSingleContainer)
    .use(ROUTES.PROFILE_EDIT.path, ErrorPage)
    .use(ROUTES.PROFILE.path, ErrorPage)
    .use(ROUTES.SIGNIN.path, Signin)
    .use(ROUTES.SIGNUP.path, Signup)
    .use('/.*', ErrorPage)
    .start()
