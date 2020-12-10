import { Block } from "../../core/Block.js"
import { render } from "../../utils/common.utils.js"
import { ProfileEditPassForm } from "./components/ProfileForm/ProfileEditPassForm.js"
import { profileEditTmplRender } from "./ProfileEdit.tmpl.js"

const ProfileEditPass = new Block(
    'div', 
    { className: 'profile-page' }, 
    [ProfileEditPassForm], 
    profileEditTmplRender
)

render(".app", ProfileEditPass)