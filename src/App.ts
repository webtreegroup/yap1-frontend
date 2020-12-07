import { Button } from "./components/Button/Button.js"
import { Popups } from "./components/Popup/Popup.js"

// popups
const editUserImagePopup = new Popups('edit-user-image')
const addUserPopup = new Popups('add-user')
const removeUserPopup = new Popups('remove-user')

const editUserImageBtn = document.querySelector('.edit-user-image')
editUserImageBtn?.addEventListener('click', function(e) {
    e.preventDefault()
    editUserImagePopup.show()
})

const addUserBtn = document.querySelector('.add-user')
addUserBtn?.addEventListener('click', function(e) {
    e.preventDefault()
    addUserPopup.show()
})

const removeUserBtn = document.querySelector('.remove-user')
removeUserBtn?.addEventListener('click', function(e) {
    e.preventDefault()
    removeUserPopup.show()
})

// forms
const forms = document.querySelectorAll('.ajax-form')
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const requestForConsole: { [key: string]: any } = {}

        const formData = new FormData(form as HTMLFormElement)

        for(const [key, value] of formData.entries()) {
            requestForConsole[key] = value
        }

        console.log(requestForConsole)
    })
})

function render(query: string, block: Button) {
    const root = document.querySelector(query)
    const appendBlock = block.getContent()

    if (!appendBlock) return
    
    root?.appendChild(appendBlock)
    
    return root
}

const button = new Button({
    text: 'Click me',
})

// app — это id дива в корне DOM
render(".index-page", button);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);