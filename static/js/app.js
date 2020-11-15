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

        formData = new FormData(form)

        for(var pair of formData.entries()) {
            console.log(pair[0]+ ' - '+ pair[1]); 
        }
    })
})