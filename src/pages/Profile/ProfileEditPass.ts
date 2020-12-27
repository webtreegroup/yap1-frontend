import { Block } from "../../core/Block.js"
import { ProfileEditPassForm } from "./components/ProfileForm/ProfileEditPassForm.js"
import { profileEditTmplRender } from "./ProfileEdit.tmpl.js"

export class ProfileEditPass extends Block<HTMLDivElement> {
    constructor() {
        super(
            'main', 
            { className: 'profile-page' }, 
            [ProfileEditPassForm], 
            profileEditTmplRender
        )
    }
}