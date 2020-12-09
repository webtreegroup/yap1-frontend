import { Block } from "../../core/Block.js"
import { IPopup } from "./Popup.model.js"
import { popupTmplRender } from "./Popup.tmpl.js"

export class Popup extends Block<HTMLDivElement> {
    constructor(props: IPopup, children?: Block[]){
        super("div", props, children)
        this.show = this.show.bind(this)
    }

    show(){
        this._element?.classList.add('popup-wrap_active')
    }

    hide(){
        this._element?.classList.remove('popup-wrap_active')
    }

    toggle(){
        this._element?.classList.toggle('popup-wrap_active')
    }

    createResources({ isActive }: IPopup) {
        this._element?.classList.add('popup-wrap', isActive ? 'popup-wrap_active' : '')
    }

    render() {
        return popupTmplRender({ ...this.props, onToggleVisible: this.toggle })
    }
}