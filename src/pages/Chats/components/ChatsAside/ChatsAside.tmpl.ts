export const chatsAsideTmplRender = (): string => {
    return `
        <header>
            <div class="chats__to-profile" data-component="ProfileLink"></div>
        </header>

        <section class="chats__body" data-component="chats"></section>
    `
}