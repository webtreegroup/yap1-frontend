import { Link } from "../../components/Link/Link.js";
import { Popup } from "../../components/Popup/Popup.js";
import { Block } from "../../core/Block.js";
import { EditUserImageForm } from "./components/EditUserImageForm/EditUserImageForm.js";
import { ProfileForm } from "./components/ProfileForm/ProfileForm.js";
import { profileTmplRender } from "./Profile.tmpl.js";
export class Profile extends Block {
    constructor() {
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
        super('main', { className: 'profile-page' }, { 'ProfileForm': ProfileForm, 'Popups': EditUserImgPopup, 'ToggleEditUserImgPopup': ToggleEditUserImgPopup }, profileTmplRender);
    }
}
