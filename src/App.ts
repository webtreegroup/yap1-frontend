import { store } from "./core/store/store.js"
import { Router } from "./core/router/Router.js"
import { Chats } from "./pages/Chats/Chats.js"
import { ChatSingle } from "./pages/Chats/ChatsSingle.js"
import { ErrorPage } from "./pages/Error/Error.js"
import { Home } from "./pages/Home/Home.js"
import { ProfileContainer } from "./pages/Profile/ProfileContainer.js"
import { ProfileEdit } from "./pages/Profile/ProfileEdit.js"
import { ProfileEditPass } from "./pages/Profile/ProfileEditPass.js"
import { Signin } from "./pages/Signin/Signin.js"
import { Signup } from "./pages/Signup/Signup.js"

Router
    .use("/", Home)
    .use("/profile/edit-pass", ProfileEditPass)
    .use("/profile/edit", ProfileEdit)
    .use("/profile", ProfileContainer)
    .use("/chats/[0-9]+", ChatSingle)
    .use("/chats", Chats)
    .use("/signin", Signin)
    .use("/signup", Signup)
    .use("/.*", ErrorPage)
    .start(store.value)
