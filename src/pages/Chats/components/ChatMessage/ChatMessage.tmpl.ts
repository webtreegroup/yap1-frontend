import { ISocketMessage } from 'core/store'

export const chatMessageTmplRender = ({
    time,
    content,
}: ISocketMessage): string => `
        <div class="chat-history-item__desc">
            ${content}
        </div>

        <div class="chat-history-item__footer">
            <time>${time}</time>
        </div>
    `
