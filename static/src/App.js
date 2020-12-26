import { Router } from "./core/Router.js"
import { Chats } from "./pages/Chats/Chats.js"
import { Profile } from "./pages/Profile/Profile.js"

Router
    .use("/profile", Profile)
    .use("/chats", Chats)
    .start()
