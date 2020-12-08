import { Store } from "./App.model.js"
import { render } from "./utils/common.utils.js"
import { Button } from "./components/Button/Button.js"
// import { Popup } from "./components/Popup/Popup.js"

// popups
// const editUserImagePopup = new Popup('edit-user-image')
// const addUserPopup = new Popup('add-user')
// const removeUserPopup = new Popup('remove-user')

// const editUserImageBtn = document.querySelector('.edit-user-image')
// editUserImageBtn?.addEventListener('click', function(e) {
//     e.preventDefault()
//     editUserImagePopup.show()
// })

// const addUserBtn = document.querySelector('.add-user')
// addUserBtn?.addEventListener('click', function(e) {
//     e.preventDefault()
//     addUserPopup.show()
// })

// const removeUserBtn = document.querySelector('.remove-user')
// removeUserBtn?.addEventListener('click', function(e) {
//     e.preventDefault()
//     removeUserPopup.show()
// })

// forms
const forms = document.querySelectorAll('.ajax-form')
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const requestForConsole: Store = {}

        const formData = new FormData(form as HTMLFormElement)

        for(const [key, value] of formData.entries()) {
            requestForConsole[key] = value
        }

        console.log(requestForConsole)
    })
})

const button = new Button({
    text: 'Click me',
    children: ''
})

render(".index-page", button)

