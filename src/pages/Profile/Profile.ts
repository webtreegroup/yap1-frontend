import { Popup } from "../../components/Popup/Popup.js"
import { Block } from "../../core/Block.js"
import { render } from "../../utils/common.utils.js"
import { ProfileForm } from "./components/ProfileForm/ProfileForm.js"
import { profileTmplRender } from "./Profile.tmpl.js"

const EditUserImgPopup = new Popup({ title: 'Загрузите файл' })

const Profile = new Block(
    'div', 
    { className: 'profile-page' }, 
    { 'ProfileForm': ProfileForm, 'Popups': EditUserImgPopup }, 
    profileTmplRender
)

render(".app", Profile)