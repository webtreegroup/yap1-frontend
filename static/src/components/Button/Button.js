import { Block } from "../../Block.js";
export class Button extends Block {
    constructor(props) {
        super("button", props);
    }
    render() {
        // В проекте должен быть ваш собственный шаблонизатор
        return `${this.props.text}`;
    }
}
//# sourceMappingURL=Button.js.map