import { Store } from "../../App.model"
import { Block } from "../../Block.js"

export class Button extends Block {
    constructor(props: Store) {
        super("button", props)
    }

    render() {
        // В проекте должен быть ваш собственный шаблонизатор
        return `${this.props.text}`
    }
}
