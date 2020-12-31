import { Link } from "../../../components/Link/Link.js";
import { Popup } from "../../../components/Popup/Popup.js";
import { Block } from "../../../core/Block.js";
import { ROUTES } from "../../../core/router/Router.config.js";
import { EditUserImageForm } from "../components/EditUserImageForm/EditUserImageForm.js";
import ProfileForm from "../components/ProfileForm/ProfileForm.js";
import { profileTmplRender } from "./Profile.tmpl.js";
import { ChatsLink } from "../components/ChatsLink/ChatsLink.js";
export class Profile extends Block {
    constructor(props) {
        const EditUserImgPopup = new Popup({
            title: 'Загрузите файл',
            isClosable: true
        }, [EditUserImageForm]);
        const ToggleEditUserImgPopup = new Link({
            onClick: () => {
                EditUserImgPopup.show();
            },
            title: 'Изменить изображение'
        });
        const ProfileEditLink = new Link({
            path: ROUTES.PROFILE_EDIT.path,
            title: ROUTES.PROFILE_EDIT.title
        });
        const ProfileEditPasswordLink = new Link({
            path: ROUTES.PROFILE_EDIT_PASS.path,
            title: ROUTES.PROFILE_EDIT_PASS.title
        });
        const ProfileLogout = new Link({
            onClick: props === null || props === void 0 ? void 0 : props.onLogout,
            title: 'Выйти'
        });
        super('main', Object.assign(Object.assign({}, props), { className: 'profile-page' }), {
            ProfileForm,
            EditUserImgPopup,
            ToggleEditUserImgPopup,
            ProfileEditLink,
            ProfileEditPasswordLink,
            ProfileLogout,
            ChatsLink
        }, profileTmplRender);
    }
    componentDidMount() {
        var _a;
        (_a = this.props) === null || _a === void 0 ? void 0 : _a.onLoadProfile();
    }
}
