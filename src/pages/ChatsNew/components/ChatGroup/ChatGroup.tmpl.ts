import { ChatGroupProps } from './ChatGroup.types'

export const chatGroupTmplRender = ({
    lastMessage = '',
    time = '',
    isOwnMessage,
}: ChatGroupProps): string => `
        <div data-component="ChatSingleLink"></div>
        <div>
            ${isOwnMessage ? '<b>Вы:</b>' : ''}
            ${lastMessage}
        </div>
        <time>${time}</time>
    `
