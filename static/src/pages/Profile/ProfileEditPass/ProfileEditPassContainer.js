import { CHANGE_PASS_FAIL_MESSAGE, CHANGE_PASS_SUCCESS_MESSAGE } from "../../../core/api/api.consts.js";
import { ProfileAPI } from "../../../core/api/profile.api.js";
import { offLoader, onLoader } from "../../../core/store/actions.js";
import { ProfileEditPass } from "./ProfileEditPass.js";
export class ProfileEditPassContainer {
    constructor() {
        this.onProfilePasswordChange = this.onProfilePasswordChange.bind(this);
    }
    onProfilePasswordChange(request) {
        onLoader();
        ProfileAPI.changePassword(request).then((response) => {
            switch (response.status) {
                case 200:
                    alert(CHANGE_PASS_SUCCESS_MESSAGE);
                    break;
                default:
                    alert(CHANGE_PASS_FAIL_MESSAGE);
            }
        }).finally(() => {
            offLoader();
        });
    }
    createBlock() {
        return new ProfileEditPass({
            onProfilePasswordChange: this.onProfilePasswordChange,
        });
    }
}
