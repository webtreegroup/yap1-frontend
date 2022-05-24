import { ChatGroupProps } from './ChatGroup.types'

export const chatGroupTmplRender = ({
    lastMessage = '',
    time = '',
    unread = 0,
    isOwnMessage,
}: ChatGroupProps): string => `
        <div class="chats-item__body">
            <h5 class="chats-item__title" data-component="ChatSingleLink"></h5>
            <span class="chats-item__desc">
                ${isOwnMessage ? '<b>Вы:</b>' : ''}
                ${lastMessage}
            </span>
        </div>
        <time class="chats-item__time">${time}</time>
        ${unread ? `<div class="chats-item__unread">${unread}</div>` : ''}
    `
