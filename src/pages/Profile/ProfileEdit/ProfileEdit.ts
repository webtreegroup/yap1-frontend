import { Block } from "../../../core/Block.js"
import { ChatsLink } from "../components/ChatsLink/ChatsLink.js"
import ProfileFormEdit from "../components/ProfileForm/ProfileFormEdit.js"
import { profileEditTmplRender } from "./ProfileEdit.tmpl.js"
import { IProfileEdit } from "./ProfileEdit.type.js"

export class ProfileEdit extends Block<HTMLDivElement> {
    constructor(props?: IProfileEdit) {        
        super(
            'main', 
            { 
                ...props,
                className: 'profile-page'
            }, 
            {
                ChatsLink,
                ProfileFormEdit
            }, 
            profileEditTmplRender
        )
    }

    componentDidMount(){
        this.props?.onLoadProfile()
    }
}
