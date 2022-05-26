export const profileTmplRender =
    (): string => `<aside class="profile-page__out" data-component="ChatsLink"></aside>
        <main class="profile-options">
            <section class="profile-options__fields" data-component="ProfileForm"></section>
            <footer class="profile-options__actions">
                <ul>
                    <li data-component="ProfileEditLink"></li>
                    <li data-component="ProfileEditPasswordLink"></li>
                    <li data-component="ProfileLogout"></li>
                </ul>
            </footer>
        </main>
    `
