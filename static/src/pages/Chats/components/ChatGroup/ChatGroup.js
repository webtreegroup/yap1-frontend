import { Block } from "../../../../core/Block.js";
import { classNames } from "../../../../utils/common.utils.js";
import { chatGroupTmplRender } from "./ChatGroup.tmpl.js";
import { Link } from "../../../../components/Link/Link.js";
import { ROUTES } from "../../../../core/router/Router.config.js";
import { Router } from "../../../../core/router/Router.js";
import { setCurrentChatAction } from "../../../../core/store/actions.js";
export class ChatGroup extends Block {
    constructor(props) {
        const ChatSingleLink = new Link({
            onClick: () => {
                setCurrentChatAction(props.id);
                Router.go(`${ROUTES.CHATS.path}/${props.id}`);
            },
            title: props.name,
        });
        super('div', props, {
            ChatSingleLink
        });
    }
    createResources({ isCurrent }) {
        var _a;
        const classes = classNames([
            'chats-item',
            isCurrent ? 'chats-item_current' : undefined
        ]);
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add(...classes);
    }
    render() {
        return chatGroupTmplRender(this.props);
    }
}
