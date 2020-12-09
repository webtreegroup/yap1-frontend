import { Block } from "../../core/Block.js"
import { render } from "../../utils/common.utils.js"
import { profileTmplRender } from "./Profile.tmpl.js"

const Profile = new Block(
    'div', 
    {
        className: 'profile-page',
    }, 
    [],
        profileTmplRender
    )

render(".app", Profile)