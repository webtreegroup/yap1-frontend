import { IButton } from "./Button.model"
import { Block } from "../../Block.js"
import { buttonTmplRender } from "./Button.tmpl.js"
import { Store } from "../../App.model"

export class Span extends Block {
    constructor(props: Store) {
        super("span", props)
    }

    render() {
        return `${this.props.text}`
    }
}
export class Button extends Block<HTMLButtonElement> {
    constructor(props: IButton) {
        const children = new Span({
            text: 'Button span',
        })

        super("button", props, children)
        
        setTimeout(() => {
            children?.setProps({
                text: 'Click me, please',
            });
        }, 3000);
    }

    createResources({ className = 'btn_primary', btnType = 'button' }: IButton) {
        this._element?.classList.add('btn', className)
        this._element?.setAttribute('type', btnType)
    }

    render() {
        return buttonTmplRender(this.props)
    }
}
