import { Block } from "../../core/Block.js";
import { ProfileFormEdit } from "./components/ProfileForm/ProfileFormEdit.js";
import { profileEditTmplRender } from "./ProfileEdit.tmpl.js";
export class ProfileEdit extends Block {
    constructor() {
        super('main', { className: 'profile-page' }, [ProfileFormEdit], profileEditTmplRender);
    }
}
