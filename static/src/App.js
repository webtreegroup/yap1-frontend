import { Router } from "./core/Router.js";
import { Chats } from "./pages/Chats/Chats.js";
import { ErrorPage } from "./pages/Error/Error.js";
import { Home } from "./pages/Home/Home.js";
import { Profile } from "./pages/Profile/Profile.js";
import { ProfileEdit } from "./pages/Profile/ProfileEdit.js";
import { ProfileEditPass } from "./pages/Profile/ProfileEditPass.js";
import { Signin } from "./pages/Signin/Signin.js";
import { Signup } from "./pages/Signup/Signup.js";
Router
    .use("/", Home)
    .use("/profile/edit-pass", ProfileEditPass)
    .use("/profile/edit", ProfileEdit)
    .use("/profile", Profile)
    .use("/chats", Chats)
    .use("/signin", Signin)
    .use("/signup", Signup)
    .use("/.*", ErrorPage)
    .start();
