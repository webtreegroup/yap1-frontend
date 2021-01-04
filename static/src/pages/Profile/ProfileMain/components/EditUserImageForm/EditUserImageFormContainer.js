import { PROFILE_CHANGE_FAIL_MESSAGE, PROFILE_CHANGE_SUCCESS_MESSAGE } from "../../../../../core/api/api.consts.js";
import { ProfileAPI } from "../../../../../core/api/profile.api.js";
import { Router } from "../../../../../core/router/Router.js";
import { loaderOffAction, loaderOnAction } from "../../../../../core/store/actions.js";
import { EditUserImageForm } from "./EditUserImageForm.js";
export class EditUserImageFormContainer {
    constructor() {
        this.onUserImageChange = this.onUserImageChange.bind(this);
    }
    onUserImageChange(request) {
        loaderOnAction();
        ProfileAPI.changeAvatar(request).then((response) => {
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
        return new EditUserImageForm({
            onUserImageChange: this.onUserImageChange,
        });
    }
}
//# sourceMappingURL=EditUserImageFormContainer.js.map