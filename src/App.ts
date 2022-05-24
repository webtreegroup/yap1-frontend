import './App.scss'

import { Router } from 'core/router'
import {
    ErrorPage,
    ProfileContainer,
    Signin,
    Signup,
    ProfileEditContainer,
    ProfileEditPassContainer,
    ChatsContainer,
    HomeContainer,
} from 'pages'
import { ChatsEmptyContainer } from 'pages/Chats/ChatsEmptyContainer'
import { ChatsNewContainer } from 'pages/ChatsNew/ChatsNew'

Router.use('/', HomeContainer)
    .use('/chats-new', ChatsNewContainer)
    .use('/profile/edit-pass', ProfileEditPassContainer)
    .use('/profile/edit', ProfileEditContainer)
    .use('/profile', ProfileContainer)
    .use('/chats/.+', ChatsContainer)
    .use('/chats', ChatsEmptyContainer)
    .use('/signin', Signin)
    .use('/signup', Signup)
    .use('/.*', ErrorPage)
    .start()
