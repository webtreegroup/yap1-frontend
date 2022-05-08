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

Router.use('/', HomeContainer)
    .use('/profile/edit-pass', ProfileEditPassContainer)
    .use('/profile/edit', ProfileEditContainer)
    .use('/profile', ProfileContainer)
    .use('/chats/[0-9]+', ChatsContainer)
    .use('/chats', ChatsContainer)
    .use('/signin', Signin)
    .use('/signup', Signup)
    .use('/.*', ErrorPage)
    .start()
