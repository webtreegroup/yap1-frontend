import './App.scss'

import { store } from "./core/store/store"
import { Router } from "./core/router/Router"
import { ErrorPage } from "./pages/Error/Error"
import { Home } from "./pages/Home/Home"
import { ProfileContainer } from "./pages/Profile/ProfileMain/ProfileContainer"
import { ProfileEditPass } from "./pages/Profile/ProfileEditPass/ProfileEditPass"
import { Signin } from "./pages/Signin/Signin"
import { Signup } from "./pages/Signup/Signup"
import { ProfileEditContainer } from "./pages/Profile/ProfileEdit/ProfileEditContainer"
import { ChatsContainer } from "./pages/Chats/ChatsContainer"
import { ChatsSingleContainer } from "./pages/Chats/ChatsSingleContainer"

Router
    .use("/", Home)
    .use("/profile/edit-pass", ProfileEditPass)
    .use("/profile/edit", ProfileEditContainer)
    .use("/profile", ProfileContainer)
    .use("/chats/[0-9]+", ChatsSingleContainer)
    .use("/chats", ChatsContainer)
    .use("/signin", Signin)
    .use("/signup", Signup)
    .use("/.*", ErrorPage)
    .start(store.value)
