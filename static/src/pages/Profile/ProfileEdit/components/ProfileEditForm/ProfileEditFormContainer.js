import { CHANGE_PROFILE_FAIL_MESSAGE, CHANGE_PROFILE_SUCCESS_MESSAGE } from "../../../../../core/api/api.consts.js";
import { ProfileAPI } from "../../../../../core/api/profile.api.js";
import { offLoader, onLoader } from "../../../../../core/store/actions.js";
import { ProfileEditForm } from "./ProfileEditForm.js";
export class ProfileEditFormContainer {
    constructor() {
        this.onProfileChange = this.onProfileChange.bind(this);
    }
    onProfileChange(request) {
        onLoader();
        ProfileAPI.change(request).then((response) => {
            switch (response.status) {
                case 200:
                    alert(CHANGE_PROFILE_SUCCESS_MESSAGE);
                    break;
                default:
                    alert(CHANGE_PROFILE_FAIL_MESSAGE);
            }
        }).finally(() => {
            offLoader();
        });
    }
    createBlock() {
        return new ProfileEditForm({
            onProfileChange: this.onProfileChange,
        });
    }
}
