import { Block } from "../../core/Block.js"
import { loaderTmplRender } from "./Loader.tmpl.js"
import { store } from "../../core/store/store.js"
import { ILoader } from "./Loader.types.js"
import { isEqual } from "../../utils/common.utils.js"

export class Loader extends Block<HTMLLinkElement> {
    constructor() {
        super(
            "div", 
            { className: 'loader' },
        )

        store.subscribe(() => {
            /**
             * TODO: в будущем перевести на внутренний стейт, т.к. изменять
             * props компонента можно только снаружи компонента, они должны быть
             * иммутабельны
             */ 
            this.setProps(store.value.loader)
        })
    }

    componentDidUpdate(oldProps: ILoader, newProps: ILoader){
        if (newProps.active) this._element?.classList.add('loader_active')
        else this._element?.classList.remove('loader_active')

        return !isEqual(oldProps, newProps)
    }

    render() {
        return loaderTmplRender(this.props)
    }
}
