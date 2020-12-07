import { Block } from "../../block.js";
export class Button extends Block {
    constructor(props) {
        super("button", props);
    }
    render() {
        // В проекте должен быть ваш собственный шаблонизатор
        return `<div>${this.props.text}</div>`;
    }
}
//# sourceMappingURL=Button.js.map