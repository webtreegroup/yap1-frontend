import { store } from 'core/store'

export const chatHistoryTmplRender = (): string => {
    const { chats, currentChatUsers, currentChatId } = store.value
    const currentChatName = chats.find(
        (chat) => chat.id === currentChatId,
    )?.name
    const usersStr = currentChatUsers
        .map((el) => `${el.firstName} ${el.secondName}`)
        .join(', ')

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

        <div class="chat-history__chat-users">
            <span>${usersStr}</span>
        </div>

        <section class="chat-history__body" data-component="Popups">
            <div class="chat-history__group" data-component="messages"></div>
        </section>

        <footer data-component="ChatMessageForm"></footer>
    `

    return history
}
