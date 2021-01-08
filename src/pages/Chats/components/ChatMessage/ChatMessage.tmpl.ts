import { IChatMessage } from "./ChatMessage.types"

export const chatMessageTmplRender = ({
    time,
    text,
    check
}: IChatMessage): string => {
    const isRead = `
        <div class="chat-history-item__is-read">
            <svg enable-background="new 0 0 515.556 515.556" height="512" viewBox="0 0 515.556 515.556" width="512" xmlns="http://www.w3.org/2000/svg"><path fill="#3369F3" d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"/></svg>
        </div>
    `
    return `
        <div class="chat-history-item__desc">
            ${text}
        </div>

        <div class="chat-history-item__footer">
            <time>${time}</time>
            ${ check ? isRead : '' }
        </div>
    `
}