import './App.scss'

import { Router } from 'core/router'
import {
    ErrorPage,
    Home,
    ProfileContainer,
    ProfileEditPass,
    Signin,
    Signup,
    ProfileEditContainer,
    ChatsContainer,
} from 'pages'

Router
    .use('/', Home)
    .use('/profile/edit-pass', ProfileEditPass)
    .use('/profile/edit', ProfileEditContainer)
    .use('/profile', ProfileContainer)
    .use('/chats/[0-9]+', ChatsContainer)
    .use('/chats', ChatsContainer)
    .use('/signin', Signin)
    .use('/signup', Signup)
    .use('/.*', ErrorPage)
    .start()
