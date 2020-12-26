import { Router } from "./core/Router.js"
import { Chats } from "./pages/Chats/Chats.js"
import { Profile } from "./pages/Profile/Profile.js"

const location = window.location

console.log(location.pathname)

const handleLinkClick = (e: MouseEvent) => {
    e.preventDefault()

    const target = e.target as HTMLElement
    const a = target.closest('a')
    const href = a?.getAttribute('href')

    if (href){
        console.log(href)
        Router.go(href)
    }
}

document.addEventListener('click', handleLinkClick)

Router
    .use("/profile", Profile)
    .use("/chats", Chats)
    .start()