import { Block } from "../../core/Block.js"
import { ChatsLink } from "./components/ChatsLink/ChatsLink.js"
import { ProfileEditPassForm } from "./components/ProfileForm/ProfileEditPassForm.js"
import { profileEditPassTmplRender } from "./ProfileEditPass.tmpl.js"

export class ProfileEditPass extends Block<HTMLDivElement> {
    constructor() {
        super(
            'main', 
            { className: 'profile-page' }, 
            {
                ChatsLink,
                ProfileEditPassForm
            },
            profileEditPassTmplRender
        )
    }
}