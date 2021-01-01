import { PROFILE_CHANGE_FAIL_MESSAGE, PROFILE_CHANGE_SUCCESS_MESSAGE } from "../../../../../core/api/api.consts.js";
import { ProfileAPI } from "../../../../../core/api/profile.api.js";
import { offLoader, onLoader } from "../../../../../core/store/actions.js";
import { EditUserImageForm } from "./EditUserImageForm.js";
export class EditUserImageFormContainer {
    constructor() {
        this.onUserImageChange = this.onUserImageChange.bind(this);
    }
    onUserImageChange(request) {
        onLoader();
        ProfileAPI.changeAvatar(request).then((response) => {
            switch (response.status) {
                case 200:
                    alert(PROFILE_CHANGE_SUCCESS_MESSAGE);
                    break;
                default:
                    alert(PROFILE_CHANGE_FAIL_MESSAGE);
            }
        }).finally(() => {
            offLoader();
        });
    }
    createBlock() {
        return new EditUserImageForm({
            onUserImageChange: this.onUserImageChange,
        });
    }
}
