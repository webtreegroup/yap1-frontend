import { store } from 'core/store'
import { IChatHistory } from './ChatHistory.types'

export const chatHistoryTmplRender = ({ currentChatId }: IChatHistory): string => {
    const { chats } = store.value
    const currentChatName = chats.find((chat) => chat.id === currentChatId)?.title

    const chatEpty = `
        <div class="chat-history__placeholder">
            Выберите чат чтобы отправить сообщение
        </div>
    `

    const history = `
        <header>
            <div class="chat-history__chat-name">
                <span>${currentChatName}</span>
            </div>

            <ul class="chat-history__user-toolbar">
                <li data-component="ToggleAddUserPopup"></li>
                <li data-component="ToggleRemoveUserPopup"></li>
            </ul>
        </header>

        <section class="chat-history__body" data-component="Popups">
            <div class="chat-history__group" data-component="messages"></div>
        </section>

        <footer data-component="ChatMessageForm"></footer>
    `

    return currentChatId
        ? history
        : chatEpty
}
