const controls = document.querySelectorAll('.input-control input')

function handleControlChangeOrFocus(e: Event) {
    const elem = e.target as HTMLInputElement
    const currentValue = elem?.value

    if (currentValue) {
        elem.classList.add('touched')
    } else {
        elem.classList.remove('touched')
    }
}

controls.forEach(element => {
    element.addEventListener('focus', handleControlChangeOrFocus)
    element.addEventListener('input', handleControlChangeOrFocus)
})