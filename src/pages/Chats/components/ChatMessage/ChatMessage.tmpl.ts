import { IChatMessage } from './ChatMessage.types'

export const chatMessageTmplRender = ({
    time,
    content,
    userName,
}: IChatMessage): string => `
        <h4>${userName || 'no name'}</h4>
        <div class="chat-history-item__desc">
            ${content}
        </div>

        <div class="chat-history-item__footer">
            <time>${time}</time>
        </div>
    `
