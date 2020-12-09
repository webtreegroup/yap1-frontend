import { Block } from "../../core/Block.js"
import { classNames } from "../../utils/common.utils.js"
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
        const classes = classNames([
            'popup-wrap', 
            isActive 
                ? 'popup-wrap_active'
                : undefined
            ])

        this._element?.classList.add(...classes)
    }

    render() {
        return popupTmplRender({ ...this.props, onToggleVisible: this.toggle })
    }
}