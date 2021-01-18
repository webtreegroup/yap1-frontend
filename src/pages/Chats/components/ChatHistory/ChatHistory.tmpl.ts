import { IChatHistory } from './ChatHistory.types'

export const chatHistoryTmplRender = ({ currentChatId }: IChatHistory): string => {
    const chatEpty = `
        <div class="chat-history__placeholder">
            Выберите чат чтобы отправить сообщение
        </div>
    `

    const history = `
        <header>
            <div class="chat-history__chat-name">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.8 460.8" style="enable-background:new 0 0 460.8 460.8"><g><g><path d="M230.432.0c-65.829.0-119.641 53.812-119.641 119.641s53.812 119.641 119.641 119.641 119.641-53.812 119.641-119.641S296.261.0 230.432.0z"/></g></g><g><g><path d="M435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898C436.8 341.682 437.322 338.024 435.755 334.89z"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>

                <span>Вадим</span>
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
