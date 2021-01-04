import { Link } from "../../../components/Link/Link.js";
import { Loader } from "../../../components/Loader/Loader.js";
import { Popup } from "../../../components/Popup/Popup.js";
import { Block } from "../../../core/block/Block.js";
import { ROUTES } from "../../../core/router/Router.config.js";
import { store } from "../../../core/store/store.js";
import { EditUserImageFormContainer } from "./components/EditUserImageForm/EditUserImageFormContainer.js";
import ProfileForm from "./components/ProfileForm/ProfileForm.js";
import { profileTmplRender } from "./Profile.tmpl.js";
export class Profile extends Block {
    constructor(props) {
        const EditUserImageForm = new EditUserImageFormContainer();
        const EditUserImgPopup = new Popup({
            title: 'Загрузите файл',
            isClosable: true
        }, {
            root: [EditUserImageForm.createBlock()]
        });
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
        const ChatsLink = new Link({
            path: ROUTES.CHATS.path,
            title: `
                <svg id="Layer" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path fill="#3369F3" d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829.0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528.0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104.0 2-.896 2-2s-.896-2-2-2z"/></svg>
            `
        });
        const LoaderComponent = new Loader();
        super('main', Object.assign(Object.assign({}, props), { className: 'profile-page' }), {
            ProfileForm,
            EditUserImgPopup: [EditUserImgPopup, LoaderComponent],
            ToggleEditUserImgPopup,
            ProfileEditLink,
            ProfileEditPasswordLink,
            ProfileLogout,
            ChatsLink
        }, profileTmplRender);
    }
    componentDidMount() {
        var _a;
        (_a = this.props) === null || _a === void 0 ? void 0 : _a.onLoadProfile().then(() => {
            store.subscribe((state) => {
                ProfileForm.setProps({
                    currentUserInfo: state.currentUser
                });
            });
        });
    }
}
//# sourceMappingURL=Profile.js.map