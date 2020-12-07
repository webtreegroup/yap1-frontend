export class Popups {
    _elem: HTMLElement | null = null

    constructor(elemId: string){
        this._elem = document.getElementById(elemId)
        this._elem?.querySelector('.popup__close')?.addEventListener('click', () => {
            this.hide()
        })
    }

    show(){
        this._elem?.classList.add('popup-wrap_active')
    }

    hide(){
        this._elem?.classList.remove('popup-wrap_active')
    }

    toggle(){
        this._elem?.classList.toggle('popup-wrap_active')
    }
}