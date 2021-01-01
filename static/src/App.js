import { store } from "./core/store/store.js";
import { Router } from "./core/router/Router.js";
import { ChatSingle } from "./pages/Chats/ChatsSingle.js";
import { ErrorPage } from "./pages/Error/Error.js";
import { Home } from "./pages/Home/Home.js";
import { ProfileContainer } from "./pages/Profile/ProfileMain/ProfileContainer.js";
import { ProfileEditPass } from "./pages/Profile/ProfileEditPass/ProfileEditPass.js";
import { Signin } from "./pages/Signin/Signin.js";
import { Signup } from "./pages/Signup/Signup.js";
import { ProfileEditContainer } from "./pages/Profile/ProfileEdit/ProfileEditContainer.js";
import { ChatsContainer } from "./pages/Chats/ChatsContainer.js";
Router
    .use("/", Home)
    .use("/profile/edit-pass", ProfileEditPass)
    .use("/profile/edit", ProfileEditContainer)
    .use("/profile", ProfileContainer)
    .use("/chats/[0-9]+", ChatSingle)
    .use("/chats", ChatsContainer)
    .use("/signin", Signin)
    .use("/signup", Signup)
    .use("/.*", ErrorPage)
    .start(store.value);
