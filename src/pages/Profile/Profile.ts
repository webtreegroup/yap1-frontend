import { Link } from "../../components/Link/Link.js"
import { Popup } from "../../components/Popup/Popup.js"
import { Block } from "../../core/Block.js"
import { ROUTES } from "../../core/router/Router.config.js"
import { EditUserImageForm } from "./components/EditUserImageForm/EditUserImageForm.js"
import { ProfileForm } from "./components/ProfileForm/ProfileForm.js"
import { profileTmplRender } from "./Profile.tmpl.js"
import { IProfile } from "./Profile.type.js"

export class Profile extends Block<HTMLDivElement> {
    constructor(props?: IProfile) {
        const EditUserImgPopup = new Popup({ 
            title: 'Загрузите файл',
            isClosable: true
        }, [EditUserImageForm])
        
        const ToggleEditUserImgPopup = new Link({ 
            onClick: () => {
                EditUserImgPopup.show()
            },
            title: 'Изменить изображение'
        })

        const ProfileEditLink = new Link({ 
            path: ROUTES.PROFILE_EDIT.path,
            title: 'Изменить данные'
        })

        const ProfileEditPasswordLink = new Link({ 
            path: ROUTES.PROFILE_EDIT_PASS.path,
            title: 'Изменить пароль'
        })

        const ProfileLogout = new Link({ 
            onClick: props?.onLogout,
            title: 'Выйти'
        })

        super(
            'main', 
            { 
                className: 'profile-page',
            }, 
            { 
                'ProfileForm': ProfileForm, 
                'Popups': EditUserImgPopup, 
                'ToggleEditUserImgPopup': ToggleEditUserImgPopup,
                'ProfileEditLink': ProfileEditLink,
                'ProfileEditPasswordLink': ProfileEditPasswordLink,
                'ProfileLogout': ProfileLogout,
            }, 
            profileTmplRender
        )
    }
}
