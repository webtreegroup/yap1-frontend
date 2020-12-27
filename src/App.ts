import { Router } from "./core/Router.js"
import { Chats } from "./pages/Chats/Chats.js"
import { Home } from "./pages/Home/Home.js"
import { Profile } from "./pages/Profile/Profile.js"

Router
    .use("/", Home)
    .use("/profile", Profile)
    .use("/chats", Chats)
    .start()