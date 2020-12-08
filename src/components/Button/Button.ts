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
        const Span1 = new Span({
            text: 'Button span 1',
        })
        const Span2 = new Span({
            text: 'Button span 2',
        })

        super("button", props, [Span1, Span2])
        
        setTimeout(() => {
            Span1?.setProps({
                text: ' Span1',
            });
        }, 3000);
        setTimeout(() => {
            Span2?.setProps({
                text: 'Span2',
            });
        }, 4000);
    }

    createResources({ className = 'btn_primary', btnType = 'button' }: IButton) {
        this._element?.classList.add('btn', className)
        this._element?.setAttribute('type', btnType)
    }

    render() {
        return buttonTmplRender(this.props)
    }
}
