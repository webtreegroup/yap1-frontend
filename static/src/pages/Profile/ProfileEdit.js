import { Block } from "../../core/Block.js";
import { ChatsLink } from "./components/ChatsLink/ChatsLink.js";
import ProfileFormEdit from "./components/ProfileForm/ProfileFormEdit.js";
import { profileEditTmplRender } from "./ProfileEdit.tmpl.js";
export class ProfileEdit extends Block {
    constructor(props) {
        super('main', Object.assign(Object.assign({}, props), { className: 'profile-page' }), {
            ChatsLink,
            ProfileFormEdit
        }, profileEditTmplRender);
    }
    componentDidMount() {
        var _a;
        (_a = this.props) === null || _a === void 0 ? void 0 : _a.onLoadProfile();
    }
}
