import { PROFILE_CHANGE_FAIL_MESSAGE, PROFILE_CHANGE_SUCCESS_MESSAGE } from "../../../../../core/api/api.consts.js";
import { ProfileAPI } from "../../../../../core/api/profile.api.js";
import { Router } from "../../../../../core/router/Router.js";
import { loaderOffAction, loaderOnAction } from "../../../../../core/store/actions.js";
import { ProfileEditPassForm } from "./ProfileEditPassForm.js";
export class ProfileEditPassFormContainer {
    constructor() {
        this.onProfilePasswordChange = this.onProfilePasswordChange.bind(this);
    }
    onProfilePasswordChange(request) {
        loaderOnAction();
        ProfileAPI.changePassword(request).then((response) => {
            switch (response.status) {
                case 200:
                    alert(PROFILE_CHANGE_SUCCESS_MESSAGE);
                    Router.reload();
                    break;
                default:
                    alert(PROFILE_CHANGE_FAIL_MESSAGE);
            }
        }).finally(() => {
            loaderOffAction();
        });
    }
    createBlock() {
        return new ProfileEditPassForm({
            onProfilePasswordChange: this.onProfilePasswordChange,
        });
    }
}
//# sourceMappingURL=ProfileEditPassFormContainer.js.map