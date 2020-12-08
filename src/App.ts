import { Store } from "./App.model.js"
import { Block } from "./Block.js"
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
        
        const requestForConsole: Store = {}

        const formData = new FormData(form as HTMLFormElement)

        for(const [key, value] of formData.entries()) {
            requestForConsole[key] = value
        }

        console.log(requestForConsole)
    })
})

function render(query: string | HTMLElement | null, block: Button) {
    const appendBlock = block.getContent()
    if (!appendBlock) return

    if (typeof query === 'string') {
        const root = document.querySelector(query)
        return root?.appendChild(appendBlock)
    }
    
    return query?.appendChild(appendBlock)
}

const button = new Button({
    text: 'Click me',
})

export class Span extends Block {
    constructor(props: Store) {
        super("span", props)
    }

    render() {
        return `<div>${this.props.text}</div>`
    }
}

const SpanComponent = new Span({
    text: 'Button span',
})

// app — это id дива в корне DOM
render(".index-page", button);
render(button.getContent() as HTMLElement, SpanComponent);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 3000);

