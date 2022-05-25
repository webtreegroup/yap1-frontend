import { Router } from 'core/router'
import {
    ErrorPage,
    ProfileContainer,
    Signin,
    Signup,
    ProfileEditContainer,
    ProfileEditPassContainer,
} from 'pages'
import { ChatsContainer, ChatsSingleContainer } from 'pages/Chats'
import { UsersContainer, UsersSingleContainer } from 'pages/Users'

Router.use('/', ChatsContainer)
    .use('/chats', ChatsContainer)
    .use('/chats/.+', ChatsSingleContainer)
    .use('/users', UsersContainer)
    .use('/users/.+', UsersSingleContainer)
    .use('/profile/edit-pass', ProfileEditPassContainer)
    .use('/profile/edit', ProfileEditContainer)
    .use('/profile', ProfileContainer)
    .use('/signin', Signin)
    .use('/signup', Signup)
    .use('/.*', ErrorPage)
    .start()
