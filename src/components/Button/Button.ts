import { Store } from "../../App.model"
import { Block } from "../../block.js"

export class Button extends Block {
    constructor(props: Store) {
        super("button", props)
    }

    render() {
          // В проекте должен быть ваш собственный шаблонизатор
        return `<div>${this.props.text}</div>`
    }
}
