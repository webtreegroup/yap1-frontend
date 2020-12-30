import { Block } from "../../core/Block.js"
import { ChatsLink } from "./components/ChatsLink/ChatsLink.js"
import { ProfileFormEdit } from "./components/ProfileForm/ProfileFormEdit.js"
import { profileEditTmplRender } from "./ProfileEdit.tmpl.js"

export class ProfileEdit extends Block<HTMLDivElement> {
    constructor() {        
        super(
            'main', 
            { className: 'profile-page' }, 
            {
                ChatsLink,
                ProfileFormEdit
            }, 
            profileEditTmplRender
        )
    }
}
