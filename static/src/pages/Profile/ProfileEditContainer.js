import { AuthAPI } from "../../core/api/auth.api.js";
import { onGetCurrentUserInfo } from "../../core/store/actions.js";
import { ProfileEdit } from "./ProfileEdit.js";
export class ProfileEditContainer {
    onLoadProfile() {
        AuthAPI.getCurrentUserInfo().then((xhr) => {
            const response = JSON.parse(xhr.response);
            onGetCurrentUserInfo(response);
        });
    }
    createBlock() {
        return new ProfileEdit({
            onLoadProfile: this.onLoadProfile,
        });
    }
}
