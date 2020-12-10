import { Link } from "../../components/Link/Link.js"
import { Popup } from "../../components/Popup/Popup.js"
import { Block } from "../../core/Block.js"
import { render } from "../../utils/common.utils.js"
import { EditUserImageForm } from "./components/EditUserImageForm/EditUserImageForm.js"
import { ProfileForm } from "./components/ProfileForm/ProfileForm.js"
import { profileTmplRender } from "./Profile.tmpl.js"

const EditUserImgPopup = new Popup({ 
    title: 'Загрузите файл',
    isClosable: true
}, [EditUserImageForm])

const ToggleEditUserImgPopup = new Link({ 
    onClick: (e) => {
        e.preventDefault()
        EditUserImgPopup.show()
    },
    text: 'Изменить изображение'
})

const Profile = new Block(
    'div', 
    { className: 'profile-page' }, 
    { 'ProfileForm': ProfileForm, 'Popups': EditUserImgPopup, 'ToggleEditUserImgPopup': ToggleEditUserImgPopup }, 
    profileTmplRender
)

render(".app", Profile)