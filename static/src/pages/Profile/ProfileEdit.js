import { Block } from "../../core/Block.js";
import { render } from "../../utils/common.utils.js";
import { ProfileFormEdit } from "./components/ProfileForm/ProfileFormEdit.js";
import { profileEditTmplRender } from "./ProfileEdit.tmpl.js";
const ProfileEdit = new Block('div', { className: 'profile-page' }, [ProfileFormEdit], profileEditTmplRender);
render(".app", ProfileEdit);
