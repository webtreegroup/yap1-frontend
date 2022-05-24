import { store } from 'core/store'

export const addUserFormTmplRender = (): string => {
    const users = store.value.users.map((el) => el.login)
    console.log(store.value.users)

    return `
        <div class="popup__footer">
            <div data-component="root"></div>

            <div class="add-user-form__users-list">
                ${users.join(', ')}
            </div>
        </div>    
    `
}
