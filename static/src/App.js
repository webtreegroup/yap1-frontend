import { ChatAPI } from "./core/api/chat.api.js";
import { Router } from "./core/router/Router.js";
import { incrementCounter } from "./core/Store.js";
import { Chats } from "./pages/Chats/Chats.js";
import { ChatSingle } from "./pages/Chats/ChatsSingle.js";
import { ErrorPage } from "./pages/Error/Error.js";
import { Home } from "./pages/Home/Home.js";
import { Profile } from "./pages/Profile/Profile.js";
import { ProfileEdit } from "./pages/Profile/ProfileEdit.js";
import { ProfileEditPass } from "./pages/Profile/ProfileEditPass.js";
// import { Signin } from "./pages/Signin/Signin.js"
import { SigninContainer } from "./pages/Signin/SigninContainer.js";
import { Signup } from "./pages/Signup/Signup.js";
Router
    .use("/", Home)
    .use("/profile/edit-pass", ProfileEditPass)
    .use("/profile/edit", ProfileEdit)
    .use("/profile", Profile)
    .use("/chats/[0-9]+", ChatSingle)
    .use("/chats", Chats)
    .use("/signin", SigninContainer)
    .use("/signup", Signup)
    .use("/.*", ErrorPage)
    .start();
ChatAPI.request();
setTimeout(() => {
    incrementCounter();
}, 2000);
